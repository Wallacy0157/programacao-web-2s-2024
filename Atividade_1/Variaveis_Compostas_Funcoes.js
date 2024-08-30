//Declara um array
const notas = [9, 8.5, 5, "10", false];

notas[4] = true;

//Comentario de bloco
console.log(notas);

//Verifica a quantidade de elementos do array
console.log(notas.length);

// Laço de repetição para percorrer o array
for(let i = 0; i < notas.length; i++){
    if (typeof notas[i] == 'number'){
        if(notas[i] >= 7){
            console.log("Passou Safado!!!");
        }else{
            console.log("Vai fazer a materia de novo otario!!!");
        }
    }else{
        console.log("Coloca a nota certa!");
    }
}

/*Declaração de matriz
    2 1 0
    0 1 0
    1 2 1
*/
let A =[
    [2, 1 ,0],
    [0, 1 ,0],
    [1 ,2, 1]
];

console.log(A[2][2]);

let capitais = {
    DF: 'Brasilia',
    DF_DDD: 61,
    BA: 'Salvador',
    BA_DDD: 71,
    RJ: 'Rio de janeiro',
    RJ_DDD: 21
};

console.log(capitais.DF);

for (const key in capitais) {
        const valor = capitais[key];
        console.log(key + ' - ' + valor);
    }

/** 
 * @param {interger} n
 * @return {boolean}
*/
function verificarNumeroPar(n){
    if(n % 2 ==0){
        return true;
    }else{
        return false;
    }
}

console.log(verificarNumeroPar(2));
console.log(verificarNumeroPar(3));