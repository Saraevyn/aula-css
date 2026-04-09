document.addEventListener('DOMContentLoaded', () => {
    // 1. Verifica se existe um login no localStorage (simulando sessão)
    const userLogado = localStorage.getItem('usuarioLogado');

    if (!userLogado) {
        // Se não tiver logado, volta para o login
        window.location.href = 'index.html';
    } else {
        document.getElementById('userDisplay').innerText = `Logado como: ${userLogado}`;
    }

    // 2. Lógica de Logout
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('usuarioLogado');
        window.location.href = 'index.html';
    });
});S

// Dentro da função onde você valida o usuário e senha
alert("Redirecionando para dashboard...");

// SALVA O LOGIN (importante para o dashboard.js não te expulsar)
localStorage.setItem('usuarioLogado', emailDigitado); 

// REDIRECIONA
window.location.href = 'dashboard.html';