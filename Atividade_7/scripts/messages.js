document.getElementById('messageForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const message = document.getElementById('message').value;
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
    displayMessages();
    document.getElementById('message').value = '';
});

function displayMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const messageDiv = document.getElementById('messages');
    messageDiv.innerHTML = '';
    messages.forEach((msg, index) => {
        const msgElement = document.createElement('div');
        msgElement.innerHTML = `<p>${msg}</p><a href="mensagem.html?index=${index}">Ver detalhes</a>`;
        messageDiv.appendChild(msgElement);
    });
}

function displayMessageDetail() {
    const params = new URLSearchParams(window.location.search);
    const index = params.get('index');
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    document.getElementById('messageDetail').innerText = messages[index] || 'Mensagem não encontrada';
}

if (location.pathname.endsWith('mural.html')) {
    displayMessages();
} else if (location.pathname.endsWith('mensagem.html')) {
    displayMessageDetail();
}