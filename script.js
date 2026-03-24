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

// --- MODO ESCURO MANUAL ---
function toggleDarkMode() {
    const html = document.documentElement;
    if (html.hasAttribute('data-theme')) {
        html.removeAttribute('data-theme');
        localStorage.removeItem('anaVerseTheme');
    } else {
        const current = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
        html.setAttribute('data-theme', current);
        localStorage.setItem('anaVerseTheme', current);
    }
}
// Aplica tema salvo manualmente
(function() {
    const saved = localStorage.getItem('anaVerseTheme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
})();

// --- MINI-JOGO: TOQUE NO CORAÇÃO ---
let minigameScore = 0;
function heartClick() {
    minigameScore++;
    document.getElementById('minigame-score').textContent = minigameScore;
    const heart = document.getElementById('minigame-heart');
    heart.classList.add('minigame-heart-anim');
    setTimeout(() => heart.classList.remove('minigame-heart-anim'), 350);
    smilesCount++;
    updateStats();
}

// --- MOBILE TOUCH: click + touchstart para todos os botões ---
function addTouchAndClick(selector, fn) {
    document.querySelectorAll(selector).forEach(el => {
        el.addEventListener('click', fn);
        el.addEventListener('touchstart', fn, { passive: true });
    });
}

// --- MODAL MÁGICO ---
function showMessage() {
    const modal = document.createElement('div');
    modal.className = 'modal-magico';
    modal.innerHTML = `
    <div class="modal-bg"></div>
    <div class="modal-content">
      <h2>Mensagem do Mago Cinzento</h2>
      <p>"Ana, Maga Branca, tua luz é o feitiço mais raro do universo. Que este Grimório te inspire a criar magia por onde passar!"</p>
      <button class="btn btn-close-modal" aria-label="Fechar">Fechar</button>
    </div>
  `;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
    modal.querySelector('.btn-close-modal').onclick = () => modal.remove();
    modal.querySelector('.modal-bg').onclick = () => modal.remove();
}

// --- SURPRESA ANIMADA (corrigido para overlay acima de tudo) ---
function generateSurprise() {
    const icons = ['✨', '🔮', '🦄', '🌟', '🧚‍♀️', '🪄'];
    const icon = icons[Math.floor(Math.random() * icons.length)];
    let overlay = document.getElementById('surprise-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'surprise-overlay';
        overlay.className = 'surprise-overlay';
        document.body.appendChild(overlay);
    }
    overlay.innerHTML = `<div class='surpresa-animada show'>${icon}</div>`;
    overlay.classList.add('show');
    setTimeout(() => overlay.classList.remove('show'), 2200);
    setTimeout(() => overlay.innerHTML = '', 2500);
    momentsCount++;
    updateStats();
}

// --- GALÁXIA: overlay acima de tudo, botão para fechar ---
let galaxyActive = false;
function toggleGalaxy() {
    galaxyActive = !galaxyActive;
    let overlay = document.getElementById('galaxy-front-overlay');
    if (galaxyActive) {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'galaxy-front-overlay';
            overlay.className = 'galaxy-front-overlay';
            overlay.innerHTML = `<button class='btn btn-close-galaxy' aria-label='Fechar Galáxia' tabindex='0'>✕</button>`;
            document.body.appendChild(overlay);
            overlay.querySelector('.btn-close-galaxy').onclick = toggleGalaxy;
        }
        overlay.classList.add('show');
    } else {
        if (overlay) overlay.classList.remove('show');
    }
    momentsCount++;
    updateStats();
}

// --- CONFETTI ---
function launchConfetti() {
    playConfetti();
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = 'linear-gradient(135deg, #fffbe7 0%, #c0c0c0 100%)';
        confetti.style.width = Math.random() * 12 + 6 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.borderRadius = '50%';
        confetti.style.top = '-40px';
        confetti.style.position = 'fixed';
        confetti.style.zIndex = 9999;
        confetti.style.opacity = 0.85;
        confetti.style.animation = `fall ${Math.random() * 2.5 + 2}s ease-in forwards`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
    showAnimatedAlert('🎉 Festa Surpresa!');
    momentsCount++;
    updateStats();
}

// --- FEEDBACK VISUAL INSTANTÂNEO ---
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('touchstart', () => btn.classList.add('btn-pressed'));
    btn.addEventListener('touchend', () => btn.classList.remove('btn-pressed'));
    btn.addEventListener('mousedown', () => btn.classList.add('btn-pressed'));
    btn.addEventListener('mouseup', () => btn.classList.remove('btn-pressed'));
    btn.addEventListener('mouseleave', () => btn.classList.remove('btn-pressed'));
});

// Atualizar estatísticas
function updateStats() {
    document.getElementById('smiles-count').textContent = smilesCount;
    document.getElementById('moments-count').textContent = momentsCount;
}

// --- ORÁCULO: Pedra Rúnica ---
function oraculoMensagem() {
    const mensagens = [
        'A magia está em você! ✨',
        'Confie na sua intuição, Maga Branca.',
        'Hoje é um dia de sorte e luz!',
        'O universo sorri para quem espalha alegria.',
        'Grandes feitiços vêm de grandes corações.',
        'A resposta está no seu sorriso! 😊',
        'Acredite: você é a luz do seu próprio caminho.',
        'A magia acontece quando você acredita!',
        'O oráculo vê um futuro brilhante para você!',
        'Siga seu coração, ele conhece o caminho.'
    ];
    const msg = mensagens[Math.floor(Math.random() * mensagens.length)];
    const div = document.getElementById('oraculo-mensagem');
    div.textContent = msg;
    div.classList.add('oraculo-anim');
    setTimeout(() => div.classList.remove('oraculo-anim'), 1200);
    smilesCount++;
    updateStats();
}
function setupOraculo() {
    const pedra = document.getElementById('oraculo-runa');
    if (!pedra) return;
    pedra.addEventListener('click', oraculoMensagem);
    pedra.addEventListener('touchstart', oraculoMensagem, { passive: true });
    pedra.addEventListener('keypress', e => {
        if (e.key === 'Enter' || e.key === ' ') oraculoMensagem();
    });
}

// --- POÇÕES DE HUMOR ---
function mudarPocao(tipo) {
    const grid = document.querySelector('.pocoes-grid');
    let msg = '';
    if (tipo === 'calmaria') msg = 'Você sente uma onda de calmaria... Respire fundo! 🧘‍♀️';
    if (tipo === 'alegria') msg = 'Alegria pura! Sorria e contagie o mundo! 😁';
    if (tipo === 'misterio') msg = 'Mistérios no ar... O que será que vem aí? 🕵️‍♀️';
    if (!document.getElementById('pocao-msg')) {
        const el = document.createElement('div');
        el.id = 'pocao-msg';
        el.className = 'pocao-msg';
        grid.parentNode.appendChild(el);
    }
    const el = document.getElementById('pocao-msg');
    el.textContent = msg;
    el.classList.add('pocao-msg-anim');
    setTimeout(() => el.classList.remove('pocao-msg-anim'), 1200);
    smilesCount++;
    updateStats();
}
function setupPocoes() {
    document.querySelectorAll('.pocao').forEach(btn => {
        btn.addEventListener('click', e => mudarPocao(btn.classList.contains('pocao-calmaria') ? 'calmaria' : btn.classList.contains('pocao-alegria') ? 'alegria' : 'misterio'));
        btn.addEventListener('touchstart', e => mudarPocao(btn.classList.contains('pocao-calmaria') ? 'calmaria' : btn.classList.contains('pocao-alegria') ? 'alegria' : 'misterio'), { passive: true });
    });
}

// --- INICIALIZAÇÃO DOS BOTÕES ---
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    loadSounds();
    updateCompliment();
    document.getElementById('minigame-score').textContent = minigameScore;
    addTouchAndClick('.btn-message', showMessage);
    addTouchAndClick('.btn-surprise', generateSurprise);
    addTouchAndClick('.btn-galaxy', toggleGalaxy);
    addTouchAndClick('.btn-confetti', launchConfetti);
    setupOraculo();
    setupPocoes();
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
    setupGlowRadiante();
    setupSincroniaAlquimica();
    setupPergaminhoRevelador();
    setupPrestigioMagico();
    setupParallax();
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

// --- MISSÃO 1: DEBUG E CORREÇÃO DE EVENTOS ---
function addTouchAndClick(el, fn) {
    el.addEventListener('click', fn);
    el.addEventListener('touchend', fn);
}

// Corrige event listeners dos cards para Glow Radiante e Poeira Estelar
function setupGlowRadiante() {
    document.querySelectorAll('.card, .card-stats').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('glow-radiante');
            setTimeout(() => card.classList.remove('glow-radiante'), 2200);
            poeiraEstelar(card);
        });
        card.addEventListener('touchend', () => {
            card.classList.add('glow-radiante');
            setTimeout(() => card.classList.remove('glow-radiante'), 2200);
            poeiraEstelar(card);
        });
    });
}
function poeiraEstelar(card) {
    for (let i = 0; i < 7; i++) {
        const dust = document.createElement('span');
        dust.className = 'decor-parallax';
        dust.style.left = (Math.random() * 80 + 10) + '%';
        dust.style.top = (Math.random() * 80 + 10) + '%';
        dust.style.width = '8px';
        dust.style.height = '8px';
        dust.style.background = 'radial-gradient(circle, #fffbe7 0%, #ffe066 80%, transparent 100%)';
        dust.style.borderRadius = '50%';
        dust.style.opacity = '0.7';
        dust.style.zIndex = 1000;
        card.appendChild(dust);
        setTimeout(() => dust.remove(), 1800 + Math.random() * 800);
    }
}

// --- MISSÃO 2: NOVAS INTERAÇÕES ---
// Sincronia Alquímica: partícula de luz viajando entre elementos
function sincroniaAlquimica(fromEl, toEl) {
    const fromRect = fromEl.getBoundingClientRect();
    const toRect = toEl.getBoundingClientRect();
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = (fromRect.left + fromRect.width / 2) + 'px';
    particle.style.top = (fromRect.top + fromRect.height / 2) + 'px';
    particle.style.width = '14px';
    particle.style.height = '14px';
    particle.style.borderRadius = '50%';
    particle.style.background = 'radial-gradient(circle, #fffbe7 0%, #ffe066 80%, transparent 100%)';
    particle.style.zIndex = 2000;
    particle.style.pointerEvents = 'none';
    document.body.appendChild(particle);
    particle.animate([
        { left: (fromRect.left + fromRect.width / 2) + 'px', top: (fromRect.top + fromRect.height / 2) + 'px', opacity: 1 },
        { left: (toRect.left + toRect.width / 2) + 'px', top: (toRect.top + toRect.height / 2) + 'px', opacity: 0.2 }
    ], { duration: 900, easing: 'cubic-bezier(.68,-0.55,.27,1.55)' });
    setTimeout(() => particle.remove(), 950);
}
// Exemplo: ao clicar em poção, partícula vai até barra de magia
function setupSincroniaAlquimica() {
    const magicBar = document.getElementById('magic-bar');
    document.querySelectorAll('.pocao').forEach(pocao => {
        pocao.addEventListener('click', () => sincroniaAlquimica(pocao, magicBar));
        pocao.addEventListener('touchend', () => sincroniaAlquimica(pocao, magicBar));
    });
}

// Pergaminho Revelador
function setupPergaminhoRevelador() {
    const pergaminho = document.querySelector('.pergaminho-revelador');
    if (!pergaminho) return;
    const nevoa = pergaminho.querySelector('.pergaminho-nevoa');
    function revelar() {
        pergaminho.classList.add('revelado');
    }
    pergaminho.addEventListener('mouseenter', revelar);
    pergaminho.addEventListener('touchstart', revelar);
}

// Sistema de Prestígio Mágico
let clickPrestigio = 0;
function setupPrestigioMagico() {
    document.body.addEventListener('click', () => {
        clickPrestigio++;
        if (clickPrestigio === 7) {
            prestigioDeusa();
            clickPrestigio = 0;
        }
    });
}
function prestigioDeusa() {
    const tela = document.createElement('div');
    tela.style.position = 'fixed';
    tela.style.left = 0; tela.style.top = 0;
    tela.style.width = '100vw'; tela.style.height = '100vh';
    tela.style.background = 'radial-gradient(circle, #fffbe7 0%, #ffe066 80%, #23242a 100%)';
    tela.style.zIndex = 99999;
    tela.style.display = 'flex';
    tela.style.alignItems = 'center';
    tela.style.justifyContent = 'center';
    tela.style.flexDirection = 'column';
    tela.style.fontFamily = 'Cinzel, serif';
    tela.style.fontSize = '2.2rem';
    tela.style.color = '#232323';
    tela.style.textShadow = '0 0 18px #fffbe7, 0 0 2px #ffe066';
    tela.innerHTML = '<div>✨ A Magia de Ana atingiu o nível máximo:<br><b>Deusa da Luz</b> ✨</div>';
    document.body.appendChild(tela);
    setTimeout(() => tela.remove(), 3200);
    // Chuva de confetes prateados
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = 'linear-gradient(135deg, #fffbe7 0%, #c0c0c0 100%)';
        confetti.style.width = Math.random() * 12 + 6 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.borderRadius = '50%';
        confetti.style.animation = `fall ${Math.random() * 2.5 + 2}s ease-in forwards`;
        confetti.style.opacity = 0.85;
        confetti.style.zIndex = 99999;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), (Math.random() * 2.5 + 2) * 1000);
    }
}

// Parallax decorativo
function setupParallax() {
    document.querySelectorAll('.decor-parallax').forEach(el => {
        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            el.style.transform = `translateY(${y * 0.12}px)`;
        });
    });
}

// Atualiza barra de magia conforme interações
let magicLevel = 0;
function updateMagicBar(increment = 1) {
    magicLevel = Math.min(100, magicLevel + increment);
    document.getElementById('magic-bar').style.width = magicLevel + '%';
    document.getElementById('magic-level').textContent = magicLevel + '%';
    if (magicLevel === 100) {
        prestigioDeusa();
        magicLevel = 0;
        setTimeout(() => {
            document.getElementById('magic-bar').style.width = '0%';
            document.getElementById('magic-level').textContent = '0%';
        }, 2000);
    }
}
// Incrementa barra em interações principais
['showMessage', 'generateSurprise', 'toggleGalaxy', 'launchConfetti', 'heartClick', 'mudarPocao'].forEach(fnName => {
    const oldFn = window[fnName];
    if (typeof oldFn === 'function') {
        window[fnName] = function (...args) {
            updateMagicBar(12);
            return oldFn.apply(this, args);
        };
    }
});
