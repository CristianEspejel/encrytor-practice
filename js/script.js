const inputText = document.querySelectorAll(".txt-encriptador")
const msj = document.querySelectorAll(".muestra-msj")


function btnEncriptar(){

   const txtEncrip = encriptar(inputText.value)
   msj.value = txtEncrip;
}

function encriptar(codigos){
   let llaves = [["e","enter"],["i","imes"],
   ["a","ai"],["o", "ober"],["u","ufat"]]
   // codigos = codigos.toLowerCase();
   for (let i = 0 ; i < codigos.lengt; i++){
       if(codigos.includes(llaves[i][0])){
           codigos = codigos.replaceAll(llaves[i][0],
           llaves[i][1])
       }
   }
   return codigos;
}
