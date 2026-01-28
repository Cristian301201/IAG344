const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});

// Referencias de elementos
const chatWindow = document.getElementById('chat-window');
const openChatBtn = document.getElementById('open-chat');
const closeChatBtn = document.getElementById('close-chat');
const sendBtn = document.getElementById('send-btn');
const chatInput = document.getElementById('chat-input');
const chatContent = document.getElementById('chat-content');

// Abrir chat
openChatBtn.addEventListener('click', () => {
    chatWindow.style.display = 'flex';
    openChatBtn.style.display = 'none'; // Opcional: ocultar botón al abrir
});

// Cerrar chat
closeChatBtn.addEventListener('click', () => {
    chatWindow.style.display = 'none';
    openChatBtn.style.display = 'block';
});

// Función para enviar mensaje (Visual)
function sendMessage() {
    const text = chatInput.value.trim();
    if (text !== "") {
        // Crear mensaje del usuario
        const userDiv = document.createElement('div');
        userDiv.classList.add('chat-message', 'user-message');
        userDiv.textContent = text;
        chatContent.appendChild(userDiv);

        chatInput.value = ""; // Limpiar input
        chatContent.scrollTop = chatContent.scrollHeight; // Scroll al final

        // Simular respuesta de la IA
        setTimeout(() => {
            const botDiv = document.createElement('div');
            botDiv.classList.add('chat-message', 'bot-message');
            botDiv.textContent = "Estoy procesando tu solicitud sobre Ducati...";
            chatContent.appendChild(botDiv);
            chatContent.scrollTop = chatContent.scrollHeight;
        }, 1000);
    }
}

// Eventos de envío
sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});



