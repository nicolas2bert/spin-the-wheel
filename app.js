const PLAYER_NAMES = [
    'antoine', 'arnaud', 'bauj', 'bec', 'clement',
    'damien', 'elwe', 'florent', 'jo', 'jomain',
    'julien', 'laot', 'n2b', 'quentin', 'rouv'
];

const SEGMENT_COLORS = ['#ff2d75', '#00e5ff', '#ffcc00', '#1a1a3e', '#ff6b9d', '#00b8d4'];

const WINNER_MESSAGES = [
    "Time to pay up!",
    "Your round, legend!",
    "The wheel has spoken!",
    "Cheers to your wallet!",
    "You're buying, no arguments!",
    "The gods of fate have chosen!",
    "Better luck next time... oh wait.",
    "Open that wallet wide!",
    "This round's on you, champ!",
    "The wheel never lies!"
];

const FINAL_MESSAGE = "The last one standing... it was always going to be you.";

const FALLBACK_COLORS = [
    '#ff2d75', '#00e5ff', '#ffcc00', '#e040fb', '#00e676',
    '#ff6e40', '#448aff', '#ff4081', '#69f0ae', '#ffd740',
    '#8c9eff', '#ea80fc', '#84ffff', '#b2ff59', '#ff8a80'
];

const STORAGE_KEY = 'spin-the-wheel-state';

// ── State ──

const state = {
    players: [],
    activePlayers: [],
    eliminatedPlayers: [],
    history: [],
    round: 1,
    totalPlayers: 0,
    spinning: false,
    muted: true,
    angle: 0,
    gameComplete: false
};

// ── Persistence ──

function saveState() {
    var data = {
        eliminatedIds: state.eliminatedPlayers.map(function (p) { return p.id; }),
        history: state.history.map(function (h) { return { round: h.round, playerId: h.player.id }; }),
        round: state.round,
        gameComplete: state.gameComplete
    };
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        // Storage full or unavailable — silently ignore
    }
}

function loadSavedState() {
    try {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return false;
        var data = JSON.parse(raw);
        if (!data || !Array.isArray(data.eliminatedIds)) return false;

        data.eliminatedIds.forEach(function (id) {
            var player = state.players.find(function (p) { return p.id === id; });
            if (player) player.eliminated = true;
        });

        state.activePlayers = state.players.filter(function (p) { return !p.eliminated; });
        state.eliminatedPlayers = state.players.filter(function (p) { return p.eliminated; });
        state.round = data.round || 1;
        state.gameComplete = data.gameComplete || false;

        state.history = (data.history || []).map(function (h) {
            var player = state.players.find(function (p) { return p.id === h.playerId; });
            return { round: h.round, player: player };
        }).filter(function (h) { return h.player; });

        return true;
    } catch (e) {
        return false;
    }
}

function clearSavedState() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
        // Ignore
    }
}

// ── Audio ──

let audioCtx = null;

function getAudioCtx() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function playTick() {
    if (state.muted) return;
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'square';
    osc.frequency.setValueAtTime(800 + Math.random() * 400, ctx.currentTime);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.05);
}

function playFanfare() {
    if (state.muted) return;
    const ctx = getAudioCtx();
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach(function (freq, i) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'triangle';
        const start = ctx.currentTime + i * 0.15;
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.12, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.4);
        osc.start(start);
        osc.stop(start + 0.4);
    });
}

// ── Player Loading ──

function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function loadPlayers() {
    state.players = PLAYER_NAMES.map(function (name, index) {
        return {
            id: name,
            name: capitalize(name),
            imgSrc: 'players/' + name + '.png',
            fallbackColor: FALLBACK_COLORS[index % FALLBACK_COLORS.length],
            imgLoaded: false,
            imgElement: null,
            eliminated: false
        };
    });
    state.players.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    state.totalPlayers = state.players.length;
    state.activePlayers = state.players.filter(function (p) { return !p.eliminated; });
    state.eliminatedPlayers = [];

    // Preload images
    state.players.forEach(function (player) {
        const img = new Image();
        img.onload = function () {
            player.imgLoaded = true;
            player.imgElement = img;
            drawWheel();
            renderRoster();
        };
        img.onerror = function () {
            player.imgLoaded = false;
        };
        img.src = player.imgSrc;
    });
}

// ── Wheel Drawing ──

function drawWheel() {
    const canvas = document.getElementById('wheel-canvas');
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    const center = size / 2;
    const radius = center - 10;
    const players = state.activePlayers;
    const count = players.length;

    ctx.clearRect(0, 0, size, size);

    if (count === 0) {
        ctx.fillStyle = '#1a1a3e';
        ctx.beginPath();
        ctx.arc(center, center, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.font = '24px "Russo One", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('All done!', center, center);
        return;
    }

    const sliceAngle = (Math.PI * 2) / count;

    players.forEach(function (player, i) {
        const startAngle = state.angle + i * sliceAngle;
        const endAngle = startAngle + sliceAngle;
        const midAngle = startAngle + sliceAngle / 2;

        // Draw segment
        ctx.beginPath();
        ctx.moveTo(center, center);
        ctx.arc(center, center, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = SEGMENT_COLORS[i % SEGMENT_COLORS.length];
        ctx.fill();
        ctx.strokeStyle = 'rgba(0,0,0,0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw face and name
        ctx.save();
        ctx.translate(center, center);
        ctx.rotate(midAngle);

        const imgRadius = Math.min(28, radius * 0.12);
        const imgDist = radius * 0.6;
        const textDist = radius * 0.85;

        // Face
        if (player.imgLoaded && player.imgElement) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(imgDist, 0, imgRadius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(player.imgElement, imgDist - imgRadius, -imgRadius, imgRadius * 2, imgRadius * 2);
            ctx.restore();
            // Border around face
            ctx.beginPath();
            ctx.arc(imgDist, 0, imgRadius, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255,255,255,0.7)';
            ctx.lineWidth = 2;
            ctx.stroke();
        } else {
            // Fallback: colored circle with initial
            ctx.beginPath();
            ctx.arc(imgDist, 0, imgRadius, 0, Math.PI * 2);
            ctx.fillStyle = player.fallbackColor;
            ctx.fill();
            ctx.strokeStyle = 'rgba(255,255,255,0.5)';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillStyle = '#fff';
            ctx.font = 'bold ' + (imgRadius) + 'px "Russo One", sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(player.name.charAt(0), imgDist, 0);
        }

        // Name
        ctx.fillStyle = '#fff';
        ctx.font = 'bold ' + Math.min(13, Math.max(9, sliceAngle * 18)) + 'px "Inter", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Rotate text so it reads outward
        ctx.save();
        ctx.translate(textDist, 0);
        var normalizedMid = ((midAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        if (normalizedMid > Math.PI / 2 && normalizedMid < Math.PI * 1.5) {
            ctx.rotate(Math.PI);
        }
        ctx.fillText(player.name, 0, 0);
        ctx.restore();

        ctx.restore();
    });

    // Center circle
    ctx.beginPath();
    ctx.arc(center, center, 30, 0, Math.PI * 2);
    ctx.fillStyle = '#0d0d1a';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Outer ring
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.lineWidth = 4;
    ctx.stroke();
}

// ── Spin ──

function spin() {
    if (state.spinning || state.gameComplete) return;
    if (state.activePlayers.length === 0) return;

    state.spinning = true;
    const spinBtn = document.getElementById('spin-btn');
    spinBtn.disabled = true;

    const players = state.activePlayers;
    const count = players.length;
    const sliceAngle = (Math.PI * 2) / count;

    // Determine random winner
    const winnerIndex = Math.floor(Math.random() * count);

    // Calculate target angle: the winner segment must be at the top (where pointer is)
    // Pointer is at the top = angle -Math.PI/2 (12 o'clock position)
    // We need the midpoint of winnerIndex segment to be at -Math.PI/2
    // Segment i starts at state.angle + i * sliceAngle
    // Midpoint: state.angle + winnerIndex * sliceAngle + sliceAngle / 2 = -Math.PI/2 + 2*PI*k
    const targetMid = -Math.PI / 2;
    const extraRotations = (3 + Math.floor(Math.random() * 4)) * Math.PI * 2;
    const neededAngle = targetMid - winnerIndex * sliceAngle - sliceAngle / 2;
    const totalRotation = extraRotations + (neededAngle - state.angle) % (Math.PI * 2);

    const startAngle = state.angle;
    const endAngle = startAngle + totalRotation;
    const duration = 3000 + Math.random() * 3000;
    const startTime = performance.now();

    let lastSegmentIndex = -1;

    function animate(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);

        state.angle = startAngle + totalRotation * eased;
        drawWheel();

        // Tick sound: detect segment boundary crossing
        const pointerAngle = (-Math.PI / 2 - state.angle % (Math.PI * 2) + Math.PI * 4) % (Math.PI * 2);
        const currentSegmentIndex = Math.floor(pointerAngle / sliceAngle) % count;
        if (currentSegmentIndex !== lastSegmentIndex && lastSegmentIndex !== -1) {
            playTick();
        }
        lastSegmentIndex = currentSegmentIndex;

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            state.angle = endAngle;
            drawWheel();
            state.spinning = false;
            revealWinner(players[winnerIndex]);
        }
    }

    requestAnimationFrame(animate);
}

// ── Winner Reveal ──

function revealWinner(player) {
    state.history.unshift({ round: state.round, player: player });
    player.eliminated = true;
    state.activePlayers = state.players.filter(function (p) { return !p.eliminated; });
    state.eliminatedPlayers = state.players.filter(function (p) { return p.eliminated; });

    const overlay = document.getElementById('winner-overlay');
    const avatar = document.getElementById('winner-avatar');
    const nameEl = document.getElementById('winner-name');
    const msgEl = document.getElementById('winner-message');

    var avatarWrapper = overlay.querySelector('.winner-avatar-wrapper');
    var existingFallback = avatarWrapper.querySelector('.avatar-fallback');
    if (existingFallback) existingFallback.remove();

    if (player.imgLoaded && player.imgElement) {
        avatar.src = player.imgSrc;
        avatar.alt = player.name;
        avatar.style.display = 'block';
    } else {
        avatar.style.display = 'none';
        var fallback = document.createElement('div');
        fallback.className = 'avatar-fallback';
        fallback.style.background = player.fallbackColor;
        fallback.style.width = '100%';
        fallback.style.height = '100%';
        fallback.style.fontSize = '4rem';
        fallback.textContent = player.name.charAt(0);
        avatarWrapper.appendChild(fallback);
    }

    nameEl.textContent = player.name;

    if (state.round === state.totalPlayers) {
        msgEl.textContent = FINAL_MESSAGE;
    } else {
        msgEl.textContent = WINNER_MESSAGES[Math.floor(Math.random() * WINNER_MESSAGES.length)];
    }

    overlay.classList.add('visible');
    playFanfare();
    launchConfetti();
}

function dismissOverlay() {
    const overlay = document.getElementById('winner-overlay');
    if (!overlay.classList.contains('visible')) return;

    overlay.classList.remove('visible');
    stopConfetti();

    state.round++;

    if (state.activePlayers.length === 0) {
        state.gameComplete = true;
    }

    saveState();
    drawWheel();
    renderRoster();
    renderHistory();
    updateRoundCounter();
    updateSpinButton();
}

// ── Confetti ──

let confettiParticles = [];
let confettiAnimId = null;

function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    confettiParticles = [];
    const colors = ['#ff2d75', '#00e5ff', '#ffcc00', '#ffffff', '#ff6b9d', '#00b8d4'];

    for (let i = 0; i < 150; i++) {
        confettiParticles.push({
            x: canvas.width / 2 + (Math.random() - 0.5) * 100,
            y: canvas.height / 2 + (Math.random() - 0.5) * 100,
            vx: (Math.random() - 0.5) * 16,
            vy: (Math.random() - 0.5) * 16 - 6,
            w: 6 + Math.random() * 8,
            h: 4 + Math.random() * 6,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.3,
            opacity: 1,
            gravity: 0.12 + Math.random() * 0.08
        });
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;

        confettiParticles.forEach(function (p) {
            p.x += p.vx;
            p.vy += p.gravity;
            p.y += p.vy;
            p.vx *= 0.99;
            p.rotation += p.rotationSpeed;
            p.opacity -= 0.008;

            if (p.opacity <= 0) return;
            alive = true;

            ctx.save();
            ctx.globalAlpha = Math.max(0, p.opacity);
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });

        if (alive) {
            confettiAnimId = requestAnimationFrame(animateConfetti);
        }
    }

    confettiAnimId = requestAnimationFrame(animateConfetti);
}

function stopConfetti() {
    if (confettiAnimId) {
        cancelAnimationFrame(confettiAnimId);
        confettiAnimId = null;
    }
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles = [];
}

// ── Roster ──

function renderRoster() {
    const grid = document.getElementById('roster-grid');
    grid.innerHTML = '';

    state.players.forEach(function (player) {
        const card = document.createElement('div');
        card.className = 'roster-card' + (player.eliminated ? ' eliminated' : '');

        const avatarWrapper = document.createElement('div');
        avatarWrapper.className = 'roster-avatar-wrapper';

        if (player.imgLoaded) {
            const img = document.createElement('img');
            img.className = 'roster-avatar';
            img.src = player.imgSrc;
            img.alt = player.name;
            avatarWrapper.appendChild(img);
        } else {
            const fallback = document.createElement('div');
            fallback.className = 'avatar-fallback';
            fallback.style.background = player.fallbackColor;
            fallback.textContent = player.name.charAt(0);
            avatarWrapper.appendChild(fallback);
        }

        const badge = document.createElement('span');
        badge.className = 'paid-badge';
        badge.textContent = 'Paid';
        avatarWrapper.appendChild(badge);

        const nameEl = document.createElement('span');
        nameEl.className = 'roster-name';
        nameEl.textContent = player.name;

        card.appendChild(avatarWrapper);
        card.appendChild(nameEl);
        grid.appendChild(card);
    });
}

// ── History ──

function renderHistory() {
    const log = document.getElementById('history-log');
    log.innerHTML = '';

    if (state.history.length === 0) {
        const p = document.createElement('p');
        p.className = 'empty-state';
        p.textContent = 'No rounds played yet';
        log.appendChild(p);
        return;
    }

    state.history.forEach(function (entry) {
        const row = document.createElement('div');
        row.className = 'history-entry';

        const roundSpan = document.createElement('span');
        roundSpan.className = 'history-round';
        roundSpan.textContent = 'Round ' + entry.round;

        const img = document.createElement('img');
        img.className = 'history-avatar';
        if (entry.player.imgLoaded) {
            img.src = entry.player.imgSrc;
        }
        img.alt = entry.player.name;
        img.onerror = function () { img.style.display = 'none'; };

        const nameSpan = document.createElement('span');
        nameSpan.className = 'history-name';
        nameSpan.textContent = entry.player.name;

        row.appendChild(roundSpan);
        row.appendChild(img);
        row.appendChild(nameSpan);
        log.appendChild(row);
    });
}

// ── Round Counter ──

function updateRoundCounter() {
    const el = document.getElementById('round-counter');
    if (state.gameComplete) {
        el.textContent = 'All rounds complete!';
        el.classList.add('complete');
    } else {
        el.textContent = 'Round ' + state.round + ' of ' + state.totalPlayers;
        el.classList.remove('complete');
    }
}

// ── Spin Button ──

function updateSpinButton() {
    const btn = document.getElementById('spin-btn');

    if (state.gameComplete) {
        btn.disabled = true;
        btn.textContent = 'SPIN!';
        btn.classList.remove('final-round');
    } else if (state.activePlayers.length === 1) {
        btn.disabled = false;
        btn.textContent = 'Reveal the last one!';
        btn.classList.add('final-round');
    } else if (state.activePlayers.length === 0) {
        btn.disabled = true;
        btn.textContent = 'SPIN!';
    } else {
        btn.disabled = false;
        btn.textContent = 'SPIN!';
        btn.classList.remove('final-round');
    }
}

// ── Final Round ──

function handleFinalRound() {
    if (state.activePlayers.length !== 1) return;

    const lastPlayer = state.activePlayers[0];
    state.spinning = true;
    const btn = document.getElementById('spin-btn');
    btn.disabled = true;

    // Spotlight effect: brief pause then reveal
    const canvas = document.getElementById('wheel-canvas');
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    const center = size / 2;

    let spotlightProgress = 0;
    const spotlightDuration = 1500;
    const startTime = performance.now();

    function animateSpotlight(now) {
        const elapsed = now - startTime;
        spotlightProgress = Math.min(elapsed / spotlightDuration, 1);

        // Redraw wheel then overlay spotlight
        drawWheel();

        const eased = Math.pow(spotlightProgress, 2);
        ctx.save();
        ctx.globalAlpha = eased * 0.6;
        ctx.fillStyle = '#0d0d1a';
        ctx.beginPath();
        ctx.rect(0, 0, size, size);
        ctx.arc(center, center, (1 - eased) * size + 60, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.restore();

        if (spotlightProgress < 1) {
            requestAnimationFrame(animateSpotlight);
        } else {
            state.spinning = false;
            revealWinner(lastPlayer);
        }
    }

    requestAnimationFrame(animateSpotlight);
}

// ── Reset ──

function resetGame() {
    if (!confirm('Reset the game? All progress will be lost.')) return;

    state.players.forEach(function (p) { p.eliminated = false; });
    state.activePlayers = state.players.filter(function (p) { return !p.eliminated; });
    state.eliminatedPlayers = [];
    state.history = [];
    state.round = 1;
    state.gameComplete = false;
    state.spinning = false;
    state.angle = 0;

    clearSavedState();
    drawWheel();
    renderRoster();
    renderHistory();
    updateRoundCounter();
    updateSpinButton();
}

// ── Mute Toggle ──

function toggleMute() {
    state.muted = !state.muted;
    const btn = document.getElementById('mute-btn');
    const iconMuted = btn.querySelector('.icon-muted');
    const iconUnmuted = btn.querySelector('.icon-unmuted');

    if (state.muted) {
        iconMuted.style.display = '';
        iconUnmuted.style.display = 'none';
        btn.classList.remove('unmuted');
    } else {
        iconMuted.style.display = 'none';
        iconUnmuted.style.display = '';
        btn.classList.add('unmuted');
        // Initialize audio context on user gesture
        getAudioCtx();
    }
}

// ── Init ──

function init() {
    loadPlayers();
    loadSavedState();

    document.getElementById('spin-btn').addEventListener('click', function () {
        if (state.activePlayers.length === 1) {
            handleFinalRound();
        } else {
            spin();
        }
    });

    document.getElementById('reset-btn').addEventListener('click', resetGame);
    document.getElementById('mute-btn').addEventListener('click', toggleMute);

    // Dismiss overlay
    document.getElementById('winner-overlay').addEventListener('click', dismissOverlay);
    document.addEventListener('keydown', function (e) {
        if (document.getElementById('winner-overlay').classList.contains('visible')) {
            dismissOverlay();
        }
    });

    // Initial render
    drawWheel();
    renderRoster();
    renderHistory();
    updateRoundCounter();
    updateSpinButton();
}

document.addEventListener('DOMContentLoaded', init);
