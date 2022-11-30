
/*
     Desenvolvido por: Johnny 
     Instagram:https://www.instagram.com/jhs_ms/  
     ou jhs_ms se gostou do meu trabalho segue-la e mande um Oiiii!
*/

/* var Buscar e igual ao botão buscar */
var Buscar=document.getElementById("buscar");

/* Aqui criei um evento de click para quando o botão busca forma 
click ele ser reconhecido e recuperar os valores */
Buscar.addEventListener("click",
/* criei uma função com a mesma variavel Buscar para pegar o dados com ajax e tambem pegar o cep */
Buscar=()=>{
    /*Verificando o tamanho do Cep  */
    cp=document.getElementById("cep").value.length;
    /* variavel cep que recebera o cep do usuario */
   var cep=document.getElementById("cep").value;

   /*se o cep tiver o tamanho de 8 digitos o usuario recebera as infomações */
cp===8?
 $.ajax({
    
      /* url que ira pegar e verificar qual o cep por meio de um codigo json, retornara os dados */
      url:"https://viacep.com.br/ws/"+cep+"/json/",
      /* metodo usado GET */
      type: "GET",
      /* resposta que sera tira do codigo json */
      success:(response)=>{

        $("#Ce").html("CEP: "+response.cep);
        $("#Cp").html("CEP: "+response.cep);
        $("#Lg").html("Logradouro: "+response.logradouro);
        $("#Cl").html("Complemento: "+response.complemento);
        $("#Br").html("Bairro: "+response.bairro);
        $("#Lc").html("Localidade: "+response.localidade);
        $("#Uf").html("UF: "+response.uf);
        $("#Ig").html("IBGE: "+response.ibge);
        $("#Ga").html("GIA: "+response.gia);
        $("#DDD").html("DDD: "+response.ddd);
        $("#Sf").html("SIAFI: "+response.siafi);

      }
 }) 
 /* se não ele recebera esta mensagem  */
 :"";

});

/*
     Desenvolvido por: Johnny 
     Instagram:https://www.instagram.com/jhs_ms/  
     ou jhs_ms se gostou do meu trabalho segue-la e mande um Oiiii!
*/
