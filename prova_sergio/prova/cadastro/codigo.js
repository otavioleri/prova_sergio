function voltar() {
    window.location.href = "../index.html";
}

function salvar(event) {
    if (event) {
        event.preventDefault();
   return; }

    const mensagem = document.getElementById("mensagem");
    const senha = document.getElementById("senha").value;
    const regra = /^(?=.*[A-Z]).{8,}$/;

    if (!regra.test(senha)) {
        mensagem.innerHTML = "A senha deve conter no minimo 8 caracteres e uma letra maiuscula";
  return;  } 

 const preencher= document.getElementById("preencher").value;

 if(preencher===""){
    mensagem.innerHTML = "todos os campos devem ser preenchidos"
return; }

 window.location.href="painel.html"

}

