function voltar() {
    window.location.href = "../index.html";
}

function salvar(event) {
    if (event) {
        event.preventDefault();
    }

    const mensagem = document.getElementById("mensagem");
    const senha = document.getElementById("senha").value;
    const regra = /^(?=.*[A-Z]).{8,}$/;

    if (!regra.test(senha)) {
        mensagem.innerHTML = "A senha deve conter no minimo 8 caracteres e uma letra maiuscula";
    } 

}

