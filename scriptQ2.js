let valorA = document.querySelector("#valorA");
let valorB = document.querySelector("#valorB");
let valorC = document.querySelector("#valorC");
let resultado = [document.querySelector("#delta"), document.querySelector("#resultado1"), document.querySelector("#resultado2")];
let botao = document.querySelector("#btn");


botao.onclick = () => {
    resultado[0].value = (calcularRaizes(valorA.value, valorB.value, valorC.value)[0]);
    resultado[1].value = (calcularRaizes(valorA.value, valorB.value, valorC.value)[1]);
    resultado[2].value = (calcularRaizes(valorA.value, valorB.value, valorC.value)[2]);
}

const calcularRaizes = (valorA, valorB, valorC, delta) => {
     if(valorA > 0){
          delta = Math.pow(valorB, 2) - (4 * valorA * valorC);
          if(delta < 0){
               return ["delta é negativo", "", ""];
          }else{
               return [delta, ((valorB * -1) + Math.sqrt(delta, 2)) / (2 * valorA), ((valorB * -1) - Math.sqrt(delta, 2)) / (2 * valorA)];
          }
     }else{
          alert("O valor de A não pode ser igual a zero");
     }
}