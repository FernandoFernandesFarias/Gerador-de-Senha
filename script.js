function gerarSenha() {
    const qtdSenhaInput = document.getElementById('qtd-caracter');
    const qtdSenha = parseInt(qtdSenhaInput.value);

    if (qtdSenha < 8 || qtdSenha > 15) {
        alert("Digite um número entre 8 e 15");
        return;
    }

    let senha = '';
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-_';

    for (let i = 1; i <= qtdSenha; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(randomIndex);
    }

    const senhaGerada = document.getElementById('senha');
    senhaGerada.textContent = `Senha Gerada: ${senha}`;

    const resultado = document.querySelector('.visibility');
    resultado.classList.remove('visibility');
}
