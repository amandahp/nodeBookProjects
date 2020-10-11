//if/else é uma estrutura simples de fluxo de execução, isto é, é uma diretiva que permite a selação entre dois caminhos distintos para execução dependendo do resultado
let x = 0;
if(x===0){
    console.log("X é zero!");
    ++x;
}

let y=0;
if(y%2===0){
    console.log("Y é PAR!")
}

//Utilizando if e for para imprimir os números pares de 0 a 20

/**for(let i=0;i <=20; i++){
    if(i%2===0){
        console.log(i + " é PAR!")
    }
}*/

//imprimir impar e par
for(let i=0;i <=20; i++){
    if(i%2===0){
        console.log(i + " é PAR!")
    } else{
        console.log(i + "é ÍMPAR")
    }
}