
/*
     Desenvolvido por: Johnny 
     Instagram:https://www.instagram.com/jhs_ms/  
     ou jhs_ms se gostou do meu trabalho segue-la e mande um Oiiii!
*/


/*Var Botao recebe o botao buscar */
var Botao=document.getElementById("buscar");
/* funcao com evento de click para detecta quando o click for dado  */
Botao.addEventListener("click",
Botao=()=>{
/*vali recebe o tamanho do cep  */
vali=document.getElementById("cep").value.length;
/*se vali for totalmento igual a 8 faça add uma classe remove um class e add um atributo hidden com o valor false */
vali===8?document.getElementById("cep").classList.add("cep-sucesso")+document.getElementById("cep").classList.remove("cep-erro")+document.getElementById("men").setAttribute("hidden",false)
/* se vali for menor ou igual a 7 ou se vali for maior ou igual a 9 add uma class remove uma class e remove o atributo hidden */
:vali<=7||vali>=9?document.getElementById("cep").classList.add("cep-erro")+document.getElementById("cep").classList.remove("cep-sucesso")+document.getElementById("men").removeAttribute("hidden"):"";

})

/*
     Desenvolvido por: Johnny 
     Instagram:https://www.instagram.com/jhs_ms/  
     ou jhs_ms se gostou do meu trabalho segue-la e mande um Oiiii!
*/
