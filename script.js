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
];

// Contadores
let smilesCount = 0;
let momentsCount = 0;

// Criar estrelas de fundo
function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Mostrar mensagem especial
function showMessage() {
    const messageBox = document.getElementById('message-box');
    const messageContent = document.getElementById('message-content');
    const randomMessage = specialMessages[Math.floor(Math.random() * specialMessages.length)];
    
    messageContent.textContent = randomMessage;
    messageBox.classList.remove('hidden');
    
    smilesCount++;
    updateStats();
}

// Fechar mensagem
function closeMessage() {
    document.getElementById('message-box').classList.add('hidden');
}

// Gerar surpresa aleatória
function generateSurprise() {
    const surprises = [
        "🎬 PLOT TWIST: Ana é a protagonista deste universo!",
        "🎯 MISSÃO: Relaxar, aproveitar e se divertir!",
        "⭐ CONQUISTA DESBLOQUEADA: Acessar o Ana-Verse!",
        "🎪 EVENTO ESPECIAL: Você acaba de encontrar um código secreto!",
        "💎 TESOURO: Sua presença aqui já é especial!",
        "🔮 REVELAÇÃO: Este projeto foi feito para você!",
        "🎯 EASTER EGG: Parabéns por explorar o site!",
        "🌈 PODER ATIVADO: Alegria infinita desbloqueada!",
    ];
    
    const surprise = surprises[Math.floor(Math.random() * surprises.length)];
    alert(surprise);
    
    momentsCount++;
    updateStats();
}

// Ativar/desativar galáxia (efeito visual)
let galaxyActive = false;
function toggleGalaxy() {
    galaxyActive = !galaxyActive;
    const body = document.body;
    
    if (galaxyActive) {
        body.style.background = 'radial-gradient(circle, #1a0033 0%, #330066 50%, #000000 100%)';
        createFloatingShapes();
    } else {
        body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
    
    momentsCount++;
    updateStats();
}

// Criar formas flutuantes
function createFloatingShapes() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 5; i++) {
        const shape = document.createElement('div');
        shape.style.position = 'fixed';
        shape.style.width = Math.random() * 100 + 50 + 'px';
        shape.style.height = shape.style.width;
        shape.style.borderRadius = '50%';
        shape.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        shape.style.left = Math.random() * 100 + '%';
        shape.style.top = Math.random() * 100 + '%';
        shape.style.opacity = '0.1';
        shape.style.pointerEvents = 'none';
        shape.style.animation = `float ${Math.random() * 10 + 15}s infinite`;
        shape.style.zIndex = '1';
        document.body.appendChild(shape);
    }
}

// Animação de flutuação
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        33% { transform: translate(100px, -100px) rotate(120deg); }
        66% { transform: translate(-100px, 100px) rotate(240deg); }
    }
`;
document.head.appendChild(style);

// Lançar confete (festa)
function launchConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#FFD700', '#FF69B4', '#00CED1', '#FFB6C1', '#FFA500', '#00FF00'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.borderRadius = '50%';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s ease-in forwards`;
        
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), (Math.random() * 3 + 2) * 1000);
    }
    
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

// Atualizar estatísticas
function updateStats() {
    document.getElementById('smiles-count').textContent = smilesCount;
    document.getElementById('moments-count').textContent = momentsCount;
}

// Inicializar ao carregar
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    
    // Easter egg: tecla secreta
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'a' && e.ctrlKey && e.shiftKey) {
            alert('🎊 Parabéns Ana! Você encontrou o code secreto! Você é incrível! 🎊');
        }
    });
});

// Efeito de movimento do mouse para interatividade
document.addEventListener('mousemove', (e) => {
    const title = document.querySelector('.title');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    title.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
});
