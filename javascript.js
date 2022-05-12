// e --> enter 
//o --> ober 
//i --> imes 
//a --> ai 
//u --> ufat

const Filtro = /^[a-z\s]+$/;

function criptografar () {

    var texto = document.getElementById("inputTexto").value;
        if(Filtro.test(texto)==true){

            var txtCifrado = texto.replace(/e/igm,"enter");
            var txtCifrado = txtCifrado.replace(/o/igm,"ober");
            var txtCifrado = txtCifrado.replace(/i/igm,"imes");
            var txtCifrado = txtCifrado.replace(/a/igm,"ai");
            var txtCifrado = txtCifrado.replace(/u/igm,"ufat");
        
            document.getElementById("lupa").style.display = "none";
            document.getElementById("texto").style.display = "none";
            document.getElementById("texto2").innerHTML = txtCifrado;
            document.getElementById("copiar").style.display = "show";
            document.getElementById("copiar").style.display = "inherit";

        }else{
            alert("erro");
        }

}

function descriptografar () {

    var texto = document.getElementById("inputTexto").value;
        if(Filtro.test(texto)==true){
            var txtCifrado = texto.replace(/enter/igm,"e");
            var txtCifrado = txtCifrado.replace(/ober/igm,"o");
            var txtCifrado = txtCifrado.replace(/imes/igm,"i");
            var txtCifrado = txtCifrado.replace(/ai/igm,"a");
            var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
        
            document.getElementById("lupa").style.display = "none";
            document.getElementById("texto").style.display = "none";
            document.getElementById("texto2").innerHTML = txtCifrado;
            document.getElementById("copiar").style.display = "show";
            document.getElementById("copiar").style.display = "inherit";

        }else{
            alert("erro");
        }

}

function copy() {
    var contem = document.querySelector("#texto2");
    contem.select();
    document.execCommcomand("copy");
    alert("Copiado");

}