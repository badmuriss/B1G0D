document.querySelector('form').addEventListener('submit', (e) => {
    
    e.preventDefault();
    alert('Cadastro criado!\n\nNome de usuario: ' + document.querySelector('#name').value + '\nSenha: 123456');
    window.location.href = 'login.html';
    
})