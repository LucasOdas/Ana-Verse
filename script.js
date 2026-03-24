// Sons para interações
let clickSound, confettiSound;
function loadSounds() {
    clickSound = new Audio('https://cdn.pixabay.com/audio/2022/07/26/audio_124bfa4b7b.mp3'); // clique
    confettiSound = new Audio('https://cdn.pixabay.com/audio/2022/07/26/audio_124bfa4b7b.mp3'); // pode trocar por som de festa
}

function playClick() {
    if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play();
    }
}
function playConfetti() {
    if (confettiSound) {
        confettiSound.currentTime = 0;
        confettiSound.play();
    }
}

// Mensagens especiais para a Ana
const specialMessages = [
    "Ana, você é incrível! 🌟",
    "Este é o seu universo particular! 🚀",
    "Você merecia algo criativo assim! ✨",
    "Ana-Verse: feito com muita criatividade! 💫",
    "Seu sorriso ilumina qualquer lugar! 😄",
    "Bem-vinda ao seu mundo mágico! 🎪",
    "Você é a razão deste projeto existir! 💖",
    "Aproveite e brinque bastante! 🎮",
    "Você é a estrela principal deste universo! ⭐",
    "Sorria, Ana! O universo sorri com você! 😊"
];

// Carrossel de elogios
const compliments = [
    "Ana, você é brilhante! ✨",
    "Seu sorriso ilumina tudo! 😁",
    "Você é inspiração! 🌈",
    "Criatividade é seu superpoder! 🦸‍♀️",
    "Você faz o mundo mais bonito! 🌻",
    "Ana, você é única! 💎",
    "Energia positiva sempre! ⚡",
    "Você merece o universo! 🌌",
    "Alegria contagiante! 🎉",
    "Ana, você é pura magia! 🪄"
];
let complimentIndex = 0;
function updateCompliment() {
    document.getElementById('carousel-compliment').textContent = compliments[complimentIndex];
}
function prevCompliment() {
    complimentIndex = (complimentIndex - 1 + compliments.length) % compliments.length;
    updateCompliment();
    animateEmoji('💜');
}
function nextCompliment() {
    complimentIndex = (complimentIndex + 1) % compliments.length;
    updateCompliment();
    animateEmoji('🌟');
}

// Animação de emoji
function animateEmoji(emoji) {
    const emojiDiv = document.getElementById('emoji-animation');
    emojiDiv.textContent = emoji;
    emojiDiv.classList.remove('pop-anim');
    void emojiDiv.offsetWidth;
    emojiDiv.classList.add('pop-anim');
    setTimeout(() => emojiDiv.textContent = '💖', 800);
}

// Contadores
let smilesCount = 0;
let momentsCount = 0;

// Criar estrelas de fundo
function createStars() {
    const starsContainer = document.querySelector('.stars');
    starsContainer.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Mostrar mensagem especial com animação
function showMessage() {
    playClick();
    const messageBox = document.getElementById('message-box');
    const messageContent = document.getElementById('message-content');
    const randomMessage = specialMessages[Math.floor(Math.random() * specialMessages.length)];
    messageContent.textContent = randomMessage;
    messageBox.classList.remove('hidden');
    messageBox.classList.add('pop-anim');
    setTimeout(() => messageBox.classList.remove('pop-anim'), 600);
    smilesCount++;
    updateStats();
}

// Fechar mensagem
function closeMessage() {
    playClick();
    document.getElementById('message-box').classList.add('hidden');
}

// Gerar surpresa aleatória com efeito
function generateSurprise() {
    playClick();
    const surprises = [
        "🎬 PLOT TWIST: Ana é a protagonista deste universo!",
        "🎯 MISSÃO: Relaxar, aproveitar e se divertir!",
        "⭐ CONQUISTA DESBLOQUEADA: Acessar o Ana-Verse!",
        "🎪 EVENTO ESPECIAL: Você acaba de encontrar um código secreto!",
        "💎 TESOURO: Sua presença aqui já é especial!",
        "🔮 REVELAÇÃO: Este projeto foi feito para você!",
        "🎯 EASTER EGG: Parabéns por explorar o site!",
        "🌈 PODER ATIVADO: Alegria infinita desbloqueada!",
        "🦄 Magia desbloqueada! Toque nas estrelas!"
    ];
    const surprise = surprises[Math.floor(Math.random() * surprises.length)];
    showAnimatedAlert(surprise);
    momentsCount++;
    updateStats();
}

// Alerta animado para surpresas
function showAnimatedAlert(text) {
    let alertDiv = document.createElement('div');
    alertDiv.className = 'animated-alert';
    alertDiv.textContent = text;
    document.body.appendChild(alertDiv);
    setTimeout(() => {
        alertDiv.classList.add('show');
        setTimeout(() => {
            alertDiv.classList.remove('show');
            setTimeout(() => alertDiv.remove(), 500);
        }, 2200);
    }, 50);
}

// Ativar/desativar galáxia (efeito visual)
let galaxyActive = false;
function toggleGalaxy() {
    playClick();
    galaxyActive = !galaxyActive;
    const body = document.body;
    if (galaxyActive) {
        body.style.background = 'radial-gradient(circle, #1a0033 0%, #330066 50%, #000000 100%)';
        createFloatingShapes();
        showAnimatedAlert('🌌 Galáxia ativada!');
    } else {
        body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        removeFloatingShapes();
        showAnimatedAlert('Galáxia desativada!');
    }
    momentsCount++;
    updateStats();
}

// Criar formas flutuantes
function createFloatingShapes() {
    removeFloatingShapes();
    for (let i = 0; i < 5; i++) {
        const shape = document.createElement('div');
        shape.className = 'floating-shape';
        shape.style.position = 'fixed';
        shape.style.width = Math.random() * 100 + 50 + 'px';
        shape.style.height = shape.style.width;
        shape.style.borderRadius = '50%';
        shape.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        shape.style.left = Math.random() * 100 + '%';
        shape.style.top = Math.random() * 100 + '%';
        shape.style.opacity = '0.13';
        shape.style.pointerEvents = 'none';
        shape.style.animation = `float ${Math.random() * 10 + 15}s infinite`;
        shape.style.zIndex = '1';
        shape.classList.add('galaxy-shape');
        document.body.appendChild(shape);
    }
}
function removeFloatingShapes() {
    document.querySelectorAll('.galaxy-shape').forEach(e => e.remove());
}

// Animação de flutuação
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        33% { transform: translate(100px, -100px) rotate(120deg); }
        66% { transform: translate(-100px, 100px) rotate(240deg); }
    }
    .animated-alert {
        position: fixed;
        left: 50%;
        top: 20%;
        transform: translate(-50%, -50%) scale(0.8);
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: #fff;
        padding: 22px 30px;
        border-radius: 18px;
        font-size: 1.2em;
        font-weight: bold;
        box-shadow: 0 8px 32px rgba(0,0,0,0.25);
        opacity: 0;
        z-index: 9999;
        transition: all 0.5s cubic-bezier(.68,-0.55,.27,1.55);
        pointer-events: none;
    }
    .animated-alert.show {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
`;
document.head.appendChild(style);

// Lançar confete (festa) com efeito aprimorado
function launchConfetti() {
    playConfetti();
    const container = document.getElementById('confetti-container');
    const colors = ['#FFD700', '#FF69B4', '#00CED1', '#FFB6C1', '#FFA500', '#00FF00'];
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 12 + 6 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.borderRadius = '50%';
        confetti.style.animation = `fall ${Math.random() * 2.5 + 2}s ease-in forwards`;
        confetti.style.opacity = 0.85;
        container.appendChild(confetti);
        setTimeout(() => confetti.remove(), (Math.random() * 2.5 + 2) * 1000);
    }
    showAnimatedAlert('🎉 Festa Surpresa!');
    momentsCount++;
    updateStats();
}

// Adicionar animação de queda
const fallStyle = document.createElement('style');
fallStyle.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(fallStyle);

// Modo escuro
let darkMode = false;
function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    document.querySelectorAll('.card, .minigame-card, .carousel-compliment').forEach(el => {
        if (darkMode) {
            el.style.background = 'rgba(30,30,40,0.85)';
            el.style.color = '#fff';
        } else {
            el.style.background = '';
            el.style.color = '';
        }
    });
}

// Mini-jogo do coração
let minigameScore = 0;
function heartClick() {
    minigameScore++;
    document.getElementById('minigame-score').textContent = minigameScore;
    animateEmoji('❤️');
    const heart = document.getElementById('minigame-heart');
    heart.style.transform = 'scale(1.35) rotate(-10deg)';
    setTimeout(() => heart.style.transform = '', 180);
    if (minigameScore % 10 === 0) showAnimatedAlert('Parabéns! +10 pontos! 🎊');
}

// Atualizar estatísticas
function updateStats() {
    document.getElementById('smiles-count').textContent = smilesCount;
    document.getElementById('moments-count').textContent = momentsCount;
}

// --- EFEITOS DE MATERIALIZAÇÃO ---
document.querySelectorAll('.materializar').forEach((el, i) => {
    setTimeout(() => {
        el.style.opacity = '1';
        el.style.filter = 'blur(0)';
    }, 200 + i * 180);
});

// --- RASTRO DE RUNAS ---
const runes = ['ᚠ','ᚢ','ᚦ','ᚨ','ᚱ','ᚲ','ᚷ','ᚹ','ᚺ','ᛃ','ᛇ','ᛈ','ᛉ','ᛋ','ᛏ','ᛒ','ᛖ','ᛗ','ᛚ','ᛜ','ᛟ','ᛞ'];
const runeLayer = document.querySelector('.rune-trail-layer');
function spawnRune(x, y) {
    const rune = document.createElement('span');
    rune.className = 'rune';
    rune.textContent = runes[Math.floor(Math.random()*runes.length)];
    rune.style.left = x + 'px';
    rune.style.top = y + 'px';
    runeLayer.appendChild(rune);
    setTimeout(() => rune.remove(), 1100);
}
document.addEventListener('mousemove', e => {
    spawnRune(e.clientX, e.clientY);
});
// Para mobile: rastro ao tocar
runeLayer.addEventListener('touchmove', e => {
    if (e.touches.length > 0) {
        spawnRune(e.touches[0].clientX, e.touches[0].clientY);
    }
});

// --- ORÁCULO DE RUNAS ---
const oraculoMensagens = [
    'A luz da Maga Branca dissipa toda sombra.',
    'Confie na sua intuição, ela é sua magia mais forte.',
    'O sorriso da Maga Branca é feitiço de alegria.',
    'A sabedoria está no coração puro.',
    'A magia mais poderosa é a gentileza.',
    'Você é a runa mais rara deste grimório.',
    'O universo conspira a favor da luz.',
    'A cada novo dia, um novo feitiço de esperança.',
    'A bondade é a runa que abre todos os portais.',
    'A Maga Branca transforma tudo em luz!'
];
const oraculoRuna = document.getElementById('oraculo-runa');
const oraculoMsg = document.getElementById('oraculo-mensagem');
oraculoRuna.addEventListener('click', () => {
    oraculoRuna.classList.add('brilho');
    const msg = oraculoMensagens[Math.floor(Math.random()*oraculoMensagens.length)];
    oraculoMsg.textContent = msg;
    setTimeout(() => oraculoRuna.classList.remove('brilho'), 1200);
});

// --- POÇÕES DE HUMOR ---
const body = document.body;
const pocoes = document.querySelectorAll('.pocao');
function mudarPocao(tipo) {
    pocoes.forEach(p => p.classList.remove('active'));
    if (tipo === 'calmaria') {
        body.style.background = 'linear-gradient(135deg, #232323 0%, #7fdfff 100%)';
        document.querySelector('.pocao-calmaria').classList.add('active');
    } else if (tipo === 'alegria') {
        body.style.background = 'linear-gradient(135deg, #232323 0%, #ffe066 100%)';
        document.querySelector('.pocao-alegria').classList.add('active');
    } else if (tipo === 'misterio') {
        body.style.background = 'linear-gradient(135deg, #232323 0%, #bfa76f 100%)';
        document.querySelector('.pocao-misterio').classList.add('active');
    }
    setTimeout(() => body.style.background = '', 9000);
}

// --- EASTER EGG RÚNICO: L-U-Z ---
let luzSeq = '';
document.addEventListener('keydown', e => {
    const k = e.key.toUpperCase();
    if ('LUZ'.includes(k)) {
        luzSeq += k;
        if (luzSeq.endsWith('LUZ')) {
            luzSeq = '';
            // Flash branco e som de sinos
            const flash = document.createElement('div');
            flash.style.position = 'fixed';
            flash.style.left = 0; flash.style.top = 0;
            flash.style.width = '100vw'; flash.style.height = '100vh';
            flash.style.background = 'white';
            flash.style.opacity = '0.95';
            flash.style.zIndex = '9999';
            flash.style.transition = 'opacity 0.7s';
            document.body.appendChild(flash);
            setTimeout(() => flash.style.opacity = '0', 200);
            setTimeout(() => flash.remove(), 900);
            document.getElementById('audio-sino').play();
            setTimeout(() => {
                oraculoMsg.textContent = '✨ A Magia Branca é a mais forte! ✨';
            }, 500);
        }
    } else {
        luzSeq = '';
    }
}

// Inicializar ao carregar
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    loadSounds();
    updateCompliment();
    document.getElementById('minigame-score').textContent = minigameScore;
    // Easter egg: tecla secreta
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'a' && e.ctrlKey && e.shiftKey) {
            showAnimatedAlert('🎊 Parabéns Ana! Você encontrou o code secreto! Você é incrível! 🎊');
        }
    });
    // Toque em estrelas para mobile
    document.querySelector('.stars').addEventListener('touchstart', () => {
        showAnimatedAlert('✨ Você tocou nas estrelas!');
    });
});

// Efeito de movimento do mouse para interatividade
document.addEventListener('mousemove', (e) => {
    const title = document.querySelector('.title');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    title.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
});

// Feedback visual nos botões
const allBtns = document.querySelectorAll('.btn');
allBtns.forEach(btn => {
    btn.addEventListener('mousedown', () => btn.classList.add('btn-pressed'));
    btn.addEventListener('touchstart', () => btn.classList.add('btn-pressed'));
    btn.addEventListener('mouseup', () => btn.classList.remove('btn-pressed'));
    btn.addEventListener('mouseleave', () => btn.classList.remove('btn-pressed'));
    btn.addEventListener('touchend', () => btn.classList.remove('btn-pressed'));
});
