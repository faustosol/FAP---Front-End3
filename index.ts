// Exercício 01
// R-> o comando for serve para criar um laço de repetição onde sao realizadas iterações de acordo com o desejo do usuário

// Exercício 02
// R-> o comando for possui um teste condicional se essa condicção for verdadeira a iteração acontece e o laço se inici

// Exercício 03
// R-> Se o teste condicional for falso o laço se encerra

// Exercício 04
// R-> A o final da iteração e da execução do bloco de código o indíce recebe uma alteração que geralmente é de  +1 através do código "++".

// Exercício 05
// for (let index = 0; index < 10; index++) {
//     console.log("Testando uma frase!")
// }

// Exercício 06
// for (let i = 0; i < 10; i++) {
//     console.log(i)
    
// }

// Exercício 07
// for (let i = 0; i < 10; i++) {
//     if(i == 5) {
//         break
//     }
//     console.log(i)
// }

// Exercício 08
// for (let i = 0; i < 10; i++) {
//    if (i == 5) {
//     continue
//    }
//    console.log(i)
// }

// Exercício 09
// let nomes: string[] = [
//     'João',
//     'Paulo',
//     'Pedro',
//     'Gustavo',
//     'Maria'
// ]

// for (let n of nomes) {
//     console.log(n)
// }

// Exercício 10
// for (let index = 0; index < 10; index++) {
//     console.log(index + 1)
// }

// Exercício 11
// for (let index = 10; index > 0; index-- ) {
//     console.log(index)
// }

// Exercício 12
// let resultado:number = 0

// for (let index = 0; index < 101; index++) {
//     resultado += index
// }

// console.log(resultado)

// Exercício 13
// for (let index = 1; index <= 50; index++) {
//     if (index % 2 === 0) {
//     console.log(index)
//     }
// }

// Exercício 14


// Exercício 15
// let fatorial_5:number = 1

// for (let index = 1; index < 6; index++) {
//     fatorial_5 *= index
// }

// console.log(fatorial_5)

/* Exercício 16
let somatorio:number = 0
let listaDeNotas:number[] = [

]
for (let index = 0; index <= 5; index++) {
    let nota = prompt("Digite a nota:")
    listaDeNotas.push(Number(nota))
}

for (let index = 0; index <= 5; index++) {
    somatorio += listaDeNotas[index]
}
const media: number = somatorio / 5
console.log(media) */

/*Exercício 17
let num = 1;
while (num <= 50) {
    if (num % 3 === 0) {
        console.log(num);
    }
    num++;
} */

/*Exercício 18
let contador = 1;
let maior = Number.MIN_VALUE;
let menor = Number.MAX_VALUE;

while (contador <= 10) {
    let numero = parseInt(prompt(`Digite o ${contador}º número:`) || '0');
    if (numero > maior) {
        maior = numero;
    }
    if (numero < menor) {
        menor = numero;
    }
    contador++;
}

console.log(`Maior número: ${maior}`);
console.log(`Menor número: ${menor}`); */

/* Exercício 19
let num = 1;
while (num <= 100) {
    if (num % 2 !== 0) {
        console.log(num);
    }
    num++;
} */

/*Exercício 20	
let contador = 1;
let aprovados = 0;

while (contador <= 5) {
    let nota = parseFloat(prompt(`Digite a nota do ${contador}º aluno:`) || '0');
    if (nota >= 7) {
        aprovados++;
    }
    contador++;
}

console.log(`Número de alunos aprovados: ${aprovados}`); */

/*Exercício 21
let numero = prompt('Digite um número inteiro:');
let soma = 0;

for (let i = 0; i < numero.length; i++) {
    soma += parseInt(numero[i]);
}

console.log(`A soma dos dígitos de ${numero} é ${soma}`); */

/*Exercício 22
let numero = parseInt(prompt('Digite um número inteiro:') || '0');

console.log(`Divisores de ${numero}:`);
for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        console.log(i);
    }
} */

/*Exercício 23
let contador = 1;
let somaAlturas = 0;

while (contador <= 5) {
    let altura = parseFloat(prompt(`Digite a altura da ${contador}ª pessoa:`) || '0');
    somaAlturas += altura;
    contador++;
}

let media = somaAlturas / 5;
console.log(`A média de altura das 5 pessoas é ${media.toFixed(2)} metros`); */

/*Exercício 24
for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
} */

/*Exercício 25
let numero = prompt('Digite um número inteiro:');
let somaDigitosPares = 0;

for (let i = 0; i < numero.length; i++) {
    let digito = parseInt(numero[i]);
    if (digito % 2 === 0) {
        somaDigitosPares += digito;
    }
}

console.log(`A soma dos dígitos pares de ${numero} é ${somaDigitosPares}`); */

/*Exercício 26
let numero = parseInt(prompt('Digite um número inteiro:') || '0');
let numeroInvertido = 0;

while (numero > 0) {
    numeroInvertido = numeroInvertido * 10 + (numero % 10);
    numero = Math.floor(numero / 10);
}

console.log(`Número invertido: ${numeroInvertido}`); */
