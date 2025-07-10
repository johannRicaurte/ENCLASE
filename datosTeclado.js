const prompt = require('prompt-sync')();

let anioNacimiento = Number(prompt('Ingrese su año de nacimiento: '));
let anioActual = new Date().getFullYear();
let edad = anioActual - anioNacimiento;
console.log('Su edad es: ' + edad);