// Função que mostra o valor do input num alert
function mostrarValor() {
    var nome = document.getElementById("nomeid");
    var fone = document.getElementById("foneid");
    var email = document.getElementById("emailid");
    var senha = document.getElementById("senhaid");
    if (nome.value != "" && fone.value != "" && email.value != "" && senha.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' o seu cadastro foi realizado com sucesso!');
    }
}
