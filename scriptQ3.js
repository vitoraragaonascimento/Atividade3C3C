let nota = document.querySelector("#nota");
let botao = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");
let resMult = document.querySelector("#resMult");

botao.onclick = () =>{
    resMult.value = multiplo(nota.value)
    resultado.value = aprovacao(resMult.value);
}
    let multiplo = (mult) => {
        if(mult >=38 && 0 < mult && mult < 100){
            if(mult % 10 == 8 || mult % 10 == 9 || mult % 10 == 3 || mult % 10 == 4){
                mult = parseInt(mult);
                    while((mult % 5) != 0){
                        mult = mult + 1;
                    } 
                    return mult;
                }else{
                    return mult;
                }
            }else{
                return mult;
            }
        }
    let aprovacao = (nota) =>{
        if(0 < nota && nota < 100){
            if(nota < 38){
                return "reprovado"
            }else{
                if(nota >= 40){
                    return "aprovado";
                }else{                    
                    return "reprovado";
                }
            }
        }else{
            alert("Sua nota está invalida");
        }
    }
