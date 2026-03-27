const PLAYER_NAMES = [
    'antoine', 'arnaud', 'bauj', 'bec', 'clement',
    'damien', 'elwe', 'florent', 'jo', 'jomain',
    'julien', 'laot', 'n2b', 'quentin', 'rouv'
];

const SEGMENT_COLORS = ['#ff2d75', '#00e5ff', '#ffcc00', '#1a1a3e', '#ff6b9d', '#00b8d4'];

const PLAYER_MESSAGES = {
    antoine: [
        "Antoine, le mec qui se prend pour un mannequin H&M dans un TER. Allez, mannequin de tournée !",
        "T'as la tête d'un mec qui commande un spritz en soirée bière. Paye et tais-toi.",
        "Cette barbe de 3 jours tu la tailles au millimètre mais t'es pas foutu d'esquiver la roue.",
        "Le hoodie blanc immaculé... t'as peur de te salir mais pas de te ruiner ? C'est ta tournée.",
        "Antoine il pose dans le train comme si y'avait un photographe. Le seul flash ce soir c'est ta CB.",
        "T'as le regard ténébreux d'un mec qui sait qu'il va payer mais qui veut quand même avoir l'air beau en le faisant.",
        "Le mec met un hoodie blanc pour aller en week-end. T'es pas à Milan, t'es dans un car, et tu payes.",
        "Avec cette mâchoire carrée tu pourrais faire des pubs pour After Shave, mais là tu fais la pub pour la générosité.",
        "Antoine, le seul mec du groupe qui met 20 minutes à se coiffer pour aller dans un bus. La CB aussi faut la sortir.",
        "Ce regard de lover dans le train... c'est les bières que tu dragues ou les filles ?"
    ],
    arnaud: [
        "Arnaud avec ses bouclettes de caniche royal. C'est pas un toilettage qu'il te faut, c'est une tournée à payer.",
        "La chemise en jean, les boucles, le téléphone greffé à la main... t'es en train de googler 'comment esquiver une tournée' ?",
        "On dirait un guitariste de groupe indie qui a jamais percé. Ce soir tu perces ton compte en banque.",
        "Ces boucles rebondissent autant que ta carte bleue va rebondir après cette tournée.",
        "Arnaud, mi-hobbit mi-bûcheron. Même Frodon payait sa tournée à la taverne du Poney Fringant.",
        "T'as la tête d'un prof de SVT qui fait des randos le week-end. La seule rando ce soir c'est jusqu'au comptoir.",
        "Le mec tient son téléphone comme si sa vie en dépendait. Lâche le phone, attrape la CB.",
        "Avec cette tignasse tu dois mettre 3 litres de shampoing par semaine. T'as le budget shampoing, t'as le budget tournée.",
        "Arnaud en mode Jean-Jacques Goldman jeune. Sauf que Goldman il chantait 'Je te donne'. Toi aussi : tu donnes ta tournée.",
        "La barbe mal taillée + les boucles en mode 'je me suis réveillé comme ça'. Bah réveille aussi ton portefeuille."
    ],
    bauj: [
        "Le finger gun c'est fini Bauj, la seule chose que tu dégaines ce soir c'est ta Visa.",
        "Poivre et sel la coiffure, poivre et sel l'addition. Sauf que l'addition c'est que pour toi.",
        "T'as une alliance au doigt mais ce soir c'est avec le comptoir que tu te maries.",
        "Bauj fait le beau avec ses cheveux gris de George Clooney à Wish.",
        "Le doigt qui pointe les autres mais c'est toi que la roue a pointé. Arroseur arrosé.",
        "Ce sourire de commercial en séminaire... tu vas closer un deal : 15 bières, ta CB.",
        "Les cheveux gris ça fait 'homme mûr'. Un homme mûr ça paye ses tournées sans pleurer.",
        "Tu fais le mec cool avec ton hoodie marron mais t'as la tête d'un père de famille qui va se faire dépouiller.",
        "La bague au doigt, le finger gun, le sourire en coin... t'as le starter pack du mec qui va quand même payer.",
        "Bauj il pointe du doigt comme s'il choisissait qui paye. Plot twist : c'est LUI."
    ],
    bec: [
        "BEC FERME LA BOUCHE ON VOIT TES AMYGDALES DEPUIS LE FOND DU BUS.",
        "Le mec rit tellement fort qu'on pourrait compter ses plombages. Allez, paye autant que t'as de dents.",
        "Avec cette tête t'as l'air d'un mec qui vient de se prendre une décharge électrique. La décharge c'est l'addition.",
        "La veste Gore-Tex c'est pour résister à la pluie, pas à la roue. Tu résistes pas, tu payes.",
        "Bec ouvre la bouche comme s'il allait avaler le bus entier. Avale plutôt l'addition.",
        "On dirait une photo de réaction meme. Le meme c'est toi qui payes la tournée.",
        "Le mec a la mâchoire tellement décrochée qu'on dirait un distributeur de PEZ géant. Distribue plutôt des bières.",
        "Cette tête c'est exactement la tête que tu vas faire quand tu vas voir le prix de 15 pintes.",
        "Bec rigole comme un phoque sous ecstasy. Le phoque il paye sa tournée au moins ?",
        "T'as la bouche plus grande que ton portefeuille mais ce soir c'est le portefeuille qui s'ouvre."
    ],
    clement: [
        "La casquette à l'envers et le t-shirt De Strukt... on est en 2026 Clement, pas à Bercy 2005.",
        "La barbe rousse de Viking sur un corps de stagiaire. Le Viking paye les hydromel, toi les bières.",
        "Clement il met une casquette pour cacher quoi ? Le vide ? En tout cas ça cache pas la tournée.",
        "Le style skateur à 30 ans passés. T'as raté le kickflip mais tu vas pas rater l'addition.",
        "Avec ta barbe rousse tu ressembles à un personnage secondaire de Vikings qui meurt à l'épisode 2. Ce soir tu meurs au comptoir.",
        "T-shirt De Strukt mais c'est ton compte en banque qui va être DESTRUKT.",
        "Le mec a le style de Tony Hawk version Décathlon. Le seul trick ce soir c'est sortir la CB.",
        "Casquette + barbe rousse = on dirait un livreur Deliveroo en pause. Livre-nous les bières, Clement.",
        "Le regard perdu sous la casquette genre 'je comprends pas pourquoi c'est moi'. T'inquiète, la roue a parlé.",
        "La barbe est rousse, le compte sera rouge. C'est ta tournée Clement."
    ],
    damien: [
        "DAMIEN TES YEUX SORTENT TELLEMENT DE TA TÊTE QU'ON DIRAIT QUE T'AS VU L'ADDITION AVANT TOUT LE MONDE.",
        "Ce regard de serial killer du bus de nuit. Tu fais flipper personne mais ton banquier oui.",
        "Le mec sourit comme le Joker version Flixbus. La blague c'est que tu payes.",
        "Avec ces yeux écarquillés tu vois tout venir sauf la tournée apparemment.",
        "Damien a la tête d'un mec recherché par Interpol. Recherché aussi par le barman : c'est ta tournée.",
        "Ce sourire psychopathe... on sait pas si tu vas payer la tournée ou manger quelqu'un.",
        "Les yeux de Damien sont tellement grands qu'il peut voir son avenir financier s'effondrer en temps réel.",
        "Le mec a le regard d'un husky sous caféine. Calme-toi, respire, et sors la CB.",
        "Damien sourit comme un mec qui vient de cacher un cadavre. Le cadavre c'est ton compte en banque.",
        "Avec cette tête de fou furieux même la roue avait peur de te choisir. Mais elle l'a fait quand même."
    ],
    elwe: [
        "Elwe et sa crinière de cheval sauvage du Larzac. Même le cheval il payerait plus vite que toi.",
        "Les cheveux jusqu'aux épaules, le North Face, et une BAGUETTE à la main. T'es une caricature de Français toi.",
        "On dirait Aragorn après 3 ans de télétravail. Le Roi du Gondor paie sa tournée.",
        "Cette tignasse c'est pas du style, c'est un cri à l'aide. L'aide c'est toi qui la donnes : en bières.",
        "Elwe il agite sa baguette comme une baguette magique. Abracadabra : c'est ta tournée.",
        "Le mec est affalé sur la fenêtre du train comme un chat errant. Un chat errant qui paye les coups.",
        "Les cheveux de Elwe ont pas vu un peigne depuis 2019. Son portefeuille non plus d'ailleurs.",
        "Mi-Jésus mi-clodo chic, Elwe est le genre de mec qui te dit 'j'ai pas ma CB' mais qui a une baguette tradition.",
        "Le look 'j'ai dormi dans une haie et j'assume'. Assume aussi la tournée.",
        "North Face sur le dos, baguette à la main, cheveux dans le vent... et la CB entre les dents s'il te plaît."
    ],
    florent: [
        "Florent dans sa polaire de berger des Pyrénées. Le troupeau c'est nous et le berger il paye la tournée.",
        "Ce regard de cocker abandonné sur une aire d'autoroute. Nous on t'abandonne pas : on te laisse payer.",
        "Le mec a la tête de quelqu'un qui se demande encore pourquoi il est là. T'es là pour payer Florent.",
        "La polaire, le regard vide, la barbe de 5 jours... on dirait un naufragé. Naufragé financier après cette tournée.",
        "Florent a l'air tellement perdu qu'on dirait que c'est son premier jour sur Terre. Premier jour, première tournée.",
        "On dirait un personnage de fond dans un film, celui que tu remarques jamais. Sauf quand il paye.",
        "Le mec ressemble à un mouton avec sa polaire de laine. Un mouton qu'on va tondre au comptoir.",
        "Florent il a le charisme d'un figurant dans Plus Belle La Vie mais le budget d'une tournée de 15.",
        "Le regard 'je suis en PLS' mais la CB est dans ta poche Florent, on le sait.",
        "Tout doux tout mou dans sa petite polaire. Sors les griffes... et la CB."
    ],
    jo: [
        "Jo et ses boucles grises de vieux surfer californien échoué dans un Flixbus. La vague c'est l'addition.",
        "Le sourire niais dans le K-Way... Jo, tu rigoleras moins quand tu verras que t'as 15 pintes à payer.",
        "On dirait un animateur de centre aéré à la retraite. L'activité du jour : payer la tournée.",
        "Ce K-Way a beau être imperméable, il protège pas ton portefeuille de la roue.",
        "Jo sourit tellement qu'on dirait une pub pour un dentifrice de supermarché. Souris encore, tu payes.",
        "Les boucles grises + le sourire béat = le tonton relou du barbecue qui raconte ses anecdotes. Et qui paye.",
        "Jo il a la tête du mec qui dit 'allez c'est ma tournée' mais qui le fait jamais. Bah ce soir c'est la roue qui décide.",
        "Le K-Way Explore... t'explores quoi Jo ? La limite de ta carte bleue ?",
        "Avec ces cheveux gris bouclés tu ressembles à un caniche qui aurait pris un coup de vieux. Le caniche régale.",
        "Jo, le seul mec qui porte un K-Way quand il fait beau. Et le seul qui paye quand c'est pas son tour. Ah bah si, c'est ton tour."
    ],
    jomain: [
        "Jomain a la tête d'un bébé de 28 ans. Même les bébés payent leur tournée ici.",
        "Pas de barbe, pas un poil, la peau lisse comme un œuf. Un œuf qui va se faire casser au comptoir.",
        "Jomain, le mec à qui on demande sa carte d'identité au bar. Montre plutôt ta CB.",
        "Le babyface du groupe. Même la roue s'est dit 'allez on va bizuter le petit'.",
        "Jomain il pourrait jouer un collégien dans une série TF1. Mais même les collégiens payent la cantine.",
        "T'as la tête du mec qui se fait recaler en boîte alors qu'il a 30 ans. Tu te fais pas recaler par la roue par contre.",
        "Le seul du groupe sans barbe. Ton menton est aussi nu que ton compte en banque va l'être.",
        "Jomain ressemble à un stagiaire qu'on a emmené par pitié. Le stagiaire paye ce soir.",
        "Visage de chérubin, portefeuille de martyr. C'est ta tournée gamin.",
        "Le mec a la peau tellement lisse que la barbe a peur de pousser. Ta CB aussi a peur de sortir, mais elle va le faire."
    ],
    julien: [
        "Le bonnet en intérieur Julien ? Tu caches quoi là-dessous ? Un portefeuille j'espère.",
        "La doudoune doublée mouton, le bonnet, le regard de tueur... t'es sapé comme un braqueur mais c'est toi qui se fait braquer.",
        "On dirait un rappeur du 9-3 qui prend le TER pour la première fois. Premier arrêt : la tournée.",
        "Le style aviateur Top Gun mais t'es dans un bus Macron. Maverick il payait ses tournées.",
        "Le bonnet + la doudoune mouton en plein mois de mars. T'as froid Julien ? Ton portefeuille aussi va avoir froid.",
        "Julien a le look d'un dealer de Netflix. Sauf que la seule came qu'il deal ce soir c'est des pintes.",
        "Le regard sombre sous le bonnet... tu prépares un plan pour esquiver ? Y'a pas de plan B, que du plan Bière.",
        "Avec cette doudoune t'as l'air d'un ours qui hiberne. Réveille-toi, c'est ta tournée.",
        "Julien, le mec le plus mystérieux du groupe. Le seul mystère c'est pourquoi t'as pas encore sorti ta CB.",
        "Le bonnet t'isole du froid mais pas de la roue. Paye et retourne hiberner."
    ],
    laot: [
        "Laot a la tête d'un tueur à gages qui a jamais souri de sa vie. Ce soir il sourit pas mais il paye.",
        "Le mec fait la gueule sur TOUTES les photos. T'inquiète Laot, une tournée ça va te décoincer.",
        "Ce regard de prof de maths qui t'a mis 2/20 au contrôle. Le 2/20 c'est la note de ton portefeuille après ce soir.",
        "Le t-shirt noir, la mâchoire serrée, les cheveux gris... on dirait un agent du FBI en civil. Agent spécial : payeur de tournées.",
        "Laot sourit jamais. Normal, sourire c'est gratuit et lui il aime pas les trucs gratuits. Ce soir rien n'est gratuit.",
        "Le look 'je suis venu, j'ai vu, j'ai fait la gueule'. Ce soir tu rajoutes 'j'ai payé'.",
        "Avec cette tête de six pieds de long, Laot fait peur à la roue. Mais la roue s'en fout.",
        "Le seul mec qui arrive à avoir l'air en colère assis dans un bus. Attends de voir l'addition.",
        "Laot, le Chuck Norris du groupe. Sauf que Chuck Norris il paye ses bières d'un regard. Toi c'est par CB.",
        "Ce visage sculpté dans la pierre ne montre aucune émotion. Même quand la roue le désigne. Mais il paye quand même."
    ],
    n2b: [
        "N2b planqué dans sa doudoune comme un ninja. Le ninja est démasqué : c'est ta tournée.",
        "Le sourire en coin genre 'moi ? jamais !' BIEN JOUÉ C'EST TOI.",
        "N2b le plus discret du groupe. Tellement discret que même son portefeuille veut se cacher.",
        "La doudoune noire, les mains dans les poches, le profil bas... le profil bas ça marche pas avec la roue.",
        "On dirait un agent secret en mission infiltration. Mission du jour : payer 15 coups.",
        "N2b essaie de se fondre dans le décor mais le décor le recrache au comptoir.",
        "Le mec a la doudoune mais pas l'armure. La roue traverse la doudoune.",
        "N2b, le genre de mec qui va aux toilettes pile au moment de l'addition. PAS CETTE FOIS.",
        "Tellement emmitouflé dans sa doudoune qu'il pensait être invisible. La roue voit tout.",
        "Le petit sourire discret... c'est le sourire de quelqu'un qui va se faire démonter le compte en banque."
    ],
    quentin: [
        "LES LUNETTES ET LE DOUBLE POUCE LEVÉ. On dirait un touriste allemand en colo. Ja, c'est ta tournée !",
        "Quentin a l'air tellement content d'être là qu'il va être content de payer aussi.",
        "Le mec fait le pouce comme si on le prenait en stop. Le stop c'est au comptoir, Quentin.",
        "Avec ces lunettes il a pas vu venir la tournée. Faut aller chez l'ophtalmo Quentin.",
        "On dirait le prof d'informatique qui essaie d'être cool avec les élèves. T'es pas cool Quentin, t'es le payeur.",
        "Le pouce levé c'est le signe international de 'je suis d'accord pour payer la tournée'. Merci Quentin.",
        "La veste Explore, les lunettes, le sourire de nerd enthousiaste... on dirait Bill Gates en week-end. Bill paye, toi aussi.",
        "Quentin, le seul mec qui met des lunettes et qui voit RIEN venir. Surprise : c'est ta tournée.",
        "Le double pouce c'est bien, le double paiement par CB c'est mieux. Allez au comptoir.",
        "On dirait la photo LinkedIn d'un mec en reconversion. Reconversion payeur de bières."
    ],
    rouv: [
        "LE CRÂNE LE PLUS LISSE DU BUS VA ENFIN SERVIR À QUELQUE CHOSE : REFLÉTER LA LUMIÈRE DU BAR EN PAYANT.",
        "Rouv prend la place de 2 personnes sur le siège et il va payer pour 15. L'équilibre de l'univers.",
        "Le crane rasé, la barbe pleine, les 2 pouces levés, le sourire XXL : on dirait Mr. Propre en week-end. Mr. Propre nettoie ton compte.",
        "Rouv il a la tête d'un videur de boîte qui laisse rentrer personne sauf l'addition.",
        "T'es assis dans le bus comme un roi sur son trône. Le roi paye les impôts et les tournées.",
        "Avec ce crâne on pourrait y atterrir un hélicoptère. Atterris plutôt au comptoir.",
        "Les deux pouces en l'air comme un empereur romain. Pouce en haut = il paye. C'est la règle.",
        "Rouv a le sourire d'un mec qui vient de manger le dernier sandwich. Tu vas manger l'addition aussi.",
        "Le bomber bleu taille XXL, le sourire qui prend toute la photo... et l'addition qui va prendre tout ton salaire.",
        "On dirait un bouddha chauve qui a atteint l'illumination. L'illumination c'est de comprendre que C'EST TA TOURNÉE."
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
            imgSrc: 'players/faces/' + name + '.png',
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
