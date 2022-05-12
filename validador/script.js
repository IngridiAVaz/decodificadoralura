const filtro = /^[a-z\s]+$/;
var btn_validar = document.getElementById("validar");
var inp_msg = document.getElementById("msg");

function filtrar(){

    var retorno = inp_msg.value;
    if(filtro.test(retorno)==true){
        var mensagem = retorno
                    .replaceAll("e", "enter")
                    .replaceAll("i", "imes")
                    .replaceAll("a", "ai")
                    .replaceAll("u", "ufat")
                    .replaceAll("o", "ober");

        alert(mensagem);
    
    }else{
        alert("erro");
    }
    
}
btn_validar.onclick = filtrar;