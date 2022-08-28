
const ladoA = document.querySelector("#ladoA");
const ladoB = document.querySelector("#ladoB");
const ladoC = document.querySelector("#ladoC");
const resultado = document.querySelector("#resultado");
const botao = document.querySelector("#btn");

botao.onclick = () => { 
    resultado.value = triangulo(ladoA.value, ladoB.value, ladoC.value);
}

const triangulo = (ladoA, ladoB, ladoC) => {
    if(ladoA != "" && ladoB != "" && ladoC != ""){    
            if ( ladoA == ladoB && ladoA == ladoC ){
                return "Seu triangulo é Equilatero";  
            }else if(ladoA != ladoB && ladoB != ladoC && ladoC != ladoA.value){
                return "Seu triangulo é Escaleno"; 
            }else{
                return "Seu triangulo é Isosceles";  
            }
    }else{
        return  "Preencha todos os campos"
    }
}