const PLAYER_NAMES = [
    'antoine', 'arnaud', 'bauj', 'bec', 'clement',
    'damien', 'elwe', 'florent', 'jo', 'jomain',
    'julien', 'laot', 'n2b', 'quentin', 'rouv'
];

const SEGMENT_COLORS = ['#ff2d75', '#00e5ff', '#ffcc00', '#1a1a3e', '#ff6b9d', '#00b8d4'];

const PLAYER_MESSAGES = {
    antoine: [
        "Le beau gosse ténébreux du groupe va enfin servir à quelque chose : payer la tournée !",
        "Avec cette barbe de trois jours parfaitement calculée, t'as clairement le budget gel ET bières.",
        "Le mec pose en hoodie blanc dans le train comme un influenceur... allez, influenceur de tournées !"
    ],
    arnaud: [
        "Les boucles, la barbe, la chemise en jean... t'es pas venu pour rigoler, t'es venu pour payer.",
        "On dirait un prof de philo en week-end. Les cours sont gratuits, mais la tournée non.",
        "Avec ces cheveux bouclés t'as déjà le look serveur de bar, autant aller jusqu'au bout et payer."
    ],
    bauj: [
        "Le doigt qui pointe c'est mignon, mais là c'est TOI que la roue pointe, Bauj.",
        "Les cheveux poivre et sel, le hoodie stylé, la bague au doigt... t'as la classe, mais surtout la carte bleue.",
        "Tu fais le malin avec ton finger gun mais c'est ton portefeuille qui va tirer ce soir."
    ],
    bec: [
        "Ferme la bouche Bec, c'est pas le dentiste, c'est la tournée !",
        "Avec cette tête de mec qui vient de gagner au loto... bah c'est normal, tu paies la tournée !",
        "La veste Gore-Tex c'est bien pour la pluie, mais ça protège pas du destin : c'est ta tournée."
    ],
    clement: [
        "La casquette à l'envers, le t-shirt de skateur... t'as 15 ans dans ta tête mais c'est toi qui paie comme un grand.",
        "Clement avec sa barbe rousse de Viking, tu vas conquérir le bar... avec ta CB.",
        "Le style streetwear c'est cool, mais ce soir ton style c'est surtout distributeur de bières."
    ],
    damien: [
        "Ces yeux écarquillés c'est parce que tu viens de voir le prix de la tournée, Damien ?",
        "Le regard de psychopathe dans le bus, ça fait peur à personne. Ce qui fait peur c'est l'addition.",
        "Damien nous fait son plus beau sourire de requin. Parfait, les requins ça paie les tournées."
    ],
    elwe: [
        "La crinière de lion, le North Face, la baguette à la main... le Français ultime va payer comme un Français ultime.",
        "Elwe avec ses cheveux dans le vent on dirait une pub L'Oréal. Mais ce soir c'est plutôt une pub Kronenbourg.",
        "T'es adossé à la fenêtre comme un poète maudit, sauf que ce soir ta malédiction c'est la tournée."
    ],
    florent: [
        "Florent dans sa polaire tout doux, on dirait un ours en peluche. Un ours qui va sortir sa CB.",
        "Le regard perdu dans le vide... tu cherches une excuse pour pas payer ? Y'en a pas.",
        "Avec cette polaire tu ressembles à un randonneur perdu. Perdu oui, mais direction le bar pour payer."
    ],
    jo: [
        "Jo et ses boucles grises, le George Clooney du groupe ! Clooney aurait payé sans râler, fais pareil.",
        "Le sourire jusqu'aux oreilles dans ta veste de pluie... tu souriras moins quand tu verras l'addition.",
        "Jo, le seul mec qui arrive en K-Way et qui repart sans un sou. C'est ta tournée !"
    ],
    jomain: [
        "Le petit visage d'ange de Jomain va pas te sauver ce soir. Sors le portefeuille, bébé.",
        "Pas de barbe, pas de ride, le Benjamin du groupe... mais assez grand pour payer la tournée.",
        "Jomain fait sa tête de premier de la classe. Premier de la classe, premier à payer."
    ],
    julien: [
        "Le bonnet, la doudoune mouton, le regard de tueur... Julien est prêt pour tout sauf payer. Dommage.",
        "On dirait un rappeur en tournée. Bah justement, c'est TA tournée Julien.",
        "Le style aviateur c'est beau, mais ce soir ton plan de vol c'est direct au comptoir."
    ],
    laot: [
        "Laot et ses cheveux gris de renard argenté. Le renard il est malin, mais la roue est plus maligne.",
        "Le regard sérieux, le t-shirt noir, le style sobre... sobre sauf ce soir, parce que tu régales.",
        "Laot fait sa tête de mec trop cool pour sourire. Tu souris pas mais tu paies quand même."
    ],
    n2b: [
        "N2b dans sa doudoune noire, discret comme d'habitude. Discret mais pas invisible pour la roue !",
        "Le petit sourire en coin genre 'ça tombera pas sur moi'... SURPRISE !",
        "N2b, le mec toujours bien emmitouflé. Ce soir c'est ton portefeuille qui va avoir froid."
    ],
    quentin: [
        "Les lunettes, le double pouce levé, la veste Explore... t'explores surtout ta carte bleue ce soir !",
        "Quentin tout sourire comme un moniteur de colo. Bah le moniteur il paie le goûter : c'est ta tournée.",
        "Le seul mec avec des lunettes du groupe et il a pas vu venir la tournée. Fallait mettre des verres plus épais."
    ],
    rouv: [
        "Le crâne rasé, la barbe pleine, les pouces en l'air : Rouv est prêt ! Prêt à payer surtout.",
        "On dirait un videur de boîte de nuit. Bah ce soir tu videurs... ton portefeuille.",
        "Rouv avec son sourire de pub Colgate et ses pouces en l'air. Pouce en l'air, CB en main !"
    ]
};

const FINAL_MESSAGE = "Le dernier survivant... au fond, on savait tous que c'était toi.";

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
        ctx.fillText('Termin\u00e9 !', center, center);
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
        var msgs = PLAYER_MESSAGES[player.id] || ["C'est ta tournée !"];
        msgEl.textContent = msgs[Math.floor(Math.random() * msgs.length)];
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
        badge.textContent = 'Pay\u00e9';
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
        p.textContent = 'Aucune tourn\u00e9e pour le moment';
        log.appendChild(p);
        return;
    }

    state.history.forEach(function (entry) {
        const row = document.createElement('div');
        row.className = 'history-entry';

        const roundSpan = document.createElement('span');
        roundSpan.className = 'history-round';
        roundSpan.textContent = 'Tour ' + entry.round;

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
        el.textContent = 'Toutes les tourn\u00e9es sont pass\u00e9es !';
        el.classList.add('complete');
    } else {
        el.textContent = 'Tour ' + state.round + ' sur ' + state.totalPlayers;
        el.classList.remove('complete');
    }
}

// ── Spin Button ──

function updateSpinButton() {
    const btn = document.getElementById('spin-btn');

    if (state.gameComplete) {
        btn.disabled = true;
        btn.textContent = 'TOURNE !';
        btn.classList.remove('final-round');
    } else if (state.activePlayers.length === 1) {
        btn.disabled = false;
        btn.textContent = 'Le dernier rescap\u00e9 !';
        btn.classList.add('final-round');
    } else if (state.activePlayers.length === 0) {
        btn.disabled = true;
        btn.textContent = 'TOURNE !';
    } else {
        btn.disabled = false;
        btn.textContent = 'TOURNE !';
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
    if (!confirm('Recommencer la partie ? Toute la progression sera perdue.')) return;

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
