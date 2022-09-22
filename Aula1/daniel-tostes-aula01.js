"use strict";
// 1 - Uma função que recebe dois parametros e retorna a soma entre eles
let num1 = 3;
let num2 = 2;
const somaDois = num1 + num2;
console.log("Ex1", somaDois);
// 2 - Uma função que recebe 5 números e retorna a média deles
const numerosMedia = ([30, 40, 50, 60, 70].reduce(function (a, b) { return a + b; }) / 5);
console.log("Ex2", numerosMedia);
// 3 - Uma função que calcula o IMC
const imc = (100 / (182 * 182) / 100);
console.log("Ex3", imc);
