function transporMatriz(A) {
    let transposta = [];

    for (let i = 0; i < A[0].length; i++) {
        transposta[i] = [];
        for (let j = 0; j < A.length; j++) {
            transposta[i][j] = A[j][i];
        }
    }

    console.log("Matriz Original:");
    console.log(A);

    console.log("Matriz Transposta:");
    console.log(transposta);
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

transporMatriz(matriz);
