"use strict";
//Exercicio para quinta feira:
const objetoArray = [
    {
        id: 1,
        modelo: "blusa do naruto",
        marca: "lacosta",
        categoria: "blusa",
    },
    {
        id: 2,
        modelo: "bermuda do naruto",
        marca: "lacosta",
        categoria: "bermuda",
    },
    {
        id: 3,
        modelo: "bandana do naruto",
        marca: "lacosta",
        categoria: "acessorios",
    },
];
function achaCategoria(objetoArray, categoriaInformada) {
    return objetoArray.filter(({ categoria }) => {
        return categoria === categoriaInformada;
    });
}
console.log(achaCategoria(objetoArray, "blusa"));
// Faça uma função que retorne um array, com arrays dentro (matriz) que contenham a sequencia de numeros de 1 a 27, separados por 3 em cada array interno. Exemplo: [[1,2,3],[4,5,6],[7,8,9]], até 27.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27];
function separar(base, max) {
    var res = [];
    for (var i = 0; i < base.length; i + max) {
        res.push(base.slice(i, i += max));
    }
    res[res.length - 1].push(base[0]);
    return res;
}
const matriz = separar(arr, 3);
console.log(matriz);
// Faça uma função que retorna o array que é resultado do exercício acima, só que ao invés de grupos de 3, vai retornar em cada array interno, a soma dos itens. Exemplo: [[6],[15]...]
function sumArrayMatriz(arr) {
    return arr.reduce((acc, arrayNumbers) => {
        let sum = 0;
        for (let number of arrayNumbers) {
            sum += number;
        }
        acc.push([sum]);
        return acc;
    }, []);
}
console.log(sumArrayMatriz(matriz));
