let numero = document.querySelector("#numero");
let botao = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");

botao.onclick = () => {
   console.log('aqui', 'luidy', LuidyF(numero.value, []));
   resultado.value = LuidyF(numero.value, []);
}

const LuidyF = (numero, aux) => {
   numero = parseFloat(numero);
   let i = Number.isInteger(numero);
   if(i){
      for(let i = 1; i <= numero ; i+=1){
         if(((i % 5) != 0) && ((i % 9) != 0)){
            aux.push(i);
         }else if(((i % 5) == 0) && ((i % 9) != 0)){
            aux.push('Luidy');
         }else if(((i % 5) != 0) && ((i % 9) == 0)){
            aux.push('Moura');
         }else{ 
            aux.push('LuidyMoura');
         }
      }
   }else{
      alert("Por favor, preencha o campo com um número INTEIRO");
   }
   return aux;
} 