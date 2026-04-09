const loginForm = document.getElementById('loginForm');
const alertDiv = document.getElementById('alert');

function showAlert(message, type = 'error') {
    alertDiv.textContent = message;
    alertDiv.className = `alert ${type}`;
    alertDiv.style.display = 'block';
    
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 4000);
}

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        showAlert('Por favor, preencha todos os campos!');
        return;
    }

    if (password.length < 6) {
        showAlert('A senha deve ter pelo menos 6 caracteres!');
        return;
    }

    // Verifica login
    if (window.mockUsers[email] && window.mockUsers[email].password === password) {
        showAlert(`Bem-vindo, ${window.mockUsers[email].name}! 🎉`, 'success');
        
        // --- AQUI ESTÁ A MUDANÇA ---
        // Salvamos sempre para o dashboard.js saber que estamos logados
        localStorage.setItem('usuarioLogado', email); 
        
        if (document.getElementById('remember').checked) {
            localStorage.setItem('rememberUser', email);
        }
        
        setTimeout(() => {
            // Removi o alert() comum para ser mais profissional e rápido
            // Ativei a linha abaixo tirando os "//"
            window.location.href = 'dashboard.html'; 
        }, 1000); // 1 segundo de delay para o usuário ler o "Bem-vindo"

    } else {
        showAlert('Email ou senha incorretos!');
    }
});

// Hint para testes
document.getElementById('email').addEventListener('focus', function() {
    if (!this.value) {
        this.placeholder = 'user@teste.com (senha: 123456)';
    }
});