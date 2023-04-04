/* ARRAYS */

// Uzduotis #1
const listas = [1, 2, 3, 4, 5];
const answer = listas[0] - listas[1] + listas[2] - listas[3] + listas[4];
console.log('Saraso verte yra: ' + answer);

//Uzduotis #2
const txtListas = ['apple', 'cider', 'vinegar'];
const txtAnswer = `Tekstas yra: ` + txtListas[0] + `, ` + txtListas[1] + `, ` + txtListas[2];
console.log(txtAnswer);


/* NUMBERS */

//Uzduotis #1

const number1 = 1;
console.log(number1);
const number2 = 2;
console.log(number2);
const number3 = 3;
console.log(number3);

//Uzduotis #2

const numAnswer = number1 + number2 + number3;
console.log(numAnswer);

/* Strings */

//Uzduotis #1

const string1 = "a";
console.log(string1);
const string2 = "b";
console.log(string2);
const string3 = "c";
console.log(string3);


//Uzduotis #2
const strAnswer = string1 + ' ' + string2 + ' ' + string3;
console.log(strAnswer);


/* IF, VARIABLES */

//Uzduotis #0

const a1 = 1;
const b1 = 2;

if (a1 < b1) {
    console.log("Pomidoras");
} else {
    console.log("Badykite kitą kartą.")
}

console.log('end');
//Uzduotis #1+2
console.log(a1 > b1);
console.log(a1 < b1);
console.log(a1 == b1);
console.log(a1 != b1);
console.log(a1 >= b1);
console.log(a1 <= b1);

console.log('end number comparison');
//Uzduotis #2+3
const txt1 = "life";
const txt2 = "lemons";

console.log(txt1.length > txt2.length);
console.log(txt1.length < txt2.length);
console.log(txt1.length == txt2.length);
console.log(txt1.length != txt2.length);
console.log(txt1.length >= txt2.length);
console.log(txt1.length <= txt2.length);
console.log('end text comparison');

//Uzduotis #4+5
const listLen = ['make', 'lemonade'];
console.log(listLen[0].length > listLen[1].length);
console.log(listLen[0].length < listLen[1].length);
console.log(listLen[0].length == listLen[1].length);
console.log(listLen[0].length != listLen[1].length);
console.log(listLen[0].length >= listLen[1].length);
console.log(listLen[0].length <= listLen[1].length);

console.clear();

/*FOR LOOPS*/

//Uzduotis #1

for (let index = 0; index < 0; index++) {
    const element =+ index;
    console.log(element);
}

let num = 0
for (let index = 0; index < 5; index++) {
    num = num + index;
    console.log(num);
}

let num2 = 0
for (let index = 0; index < 101; index++) {
    num2 = num2 + index;
    console.log(num2);
}

let num3 = 0
for (let index = 574; index < 815; index++) {
    num3 = num3 + index;
    console.log(num3);
}
console.clear();

// let num4 = 0
// for (let index = -50; index <=50; index++) {
//     num4 = num4 + index;
//     console.log(num4);
// }
// console.log(num4)
// console.log('end loop1');

let num5 = 0
for (let index = -70; index <= 30; index++) {
    num5 = num5 + index;
    console.log(num5);
}
console.log(num5)
console.log('end loop2');