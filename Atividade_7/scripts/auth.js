document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Usuário cadastrado com sucesso!');
    window.location.href = 'login.html';
});

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.username === username && user.password === password) {
        localStorage.setItem('isAuthenticated', true);
        window.location.href = 'mural.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});

function logout() {
    localStorage.removeItem('isAuthenticated');
    window.location.href = 'login.html';
}

const protectedPages = ['/mural.html', '/mensagem.html'];
const isAuthenticated = localStorage.getItem('isAuthenticated');

if (protectedPages.includes(location.pathname) && !isAuthenticated) {
    alert('Faça login para acessar essa página.');
    window.location.href = 'login.html';
}