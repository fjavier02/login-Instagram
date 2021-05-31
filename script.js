const inputUsuario = document.getElementById('usuario')
const inputSenha = document.getElementById('senha')
const inputEntrar = document.getElementById('entrar')


function enable() {
    if (inputUsuario.value != "" && inputSenha.value !="") {
        document.getElementById('entrar').style.background= "rgba(0,149,246, 1)";
        document.getElementById('entrar').disabled=false;
    }
    if (inputUsuario.value == "" || inputSenha.value == "" ) {
        document.getElementById('entrar').style.background= "rgba(0,149,246, 0.3)";
        document.getElementById('entrar').disabled=true;
    }
}

let i =6;
function time() {
    i = i - 1;
    document.getElementsByClassName(`background${i}`)[0].style.opacity="0";
    if(i==1){
        for (let i = 1; i < 6; i++) {
            document.getElementsByClassName(`background${i}`)[0].style.opacity="1"   
        }
        i=6;
    }   
}
setInterval(function(){ time(); }, 5000)