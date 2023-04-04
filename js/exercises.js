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

let num = 0;
for (let index = 0; index < 5; index++) {
    num = num + index;
    console.log(num);
}

let num2 = 0;
for (let index = 0; index < 101; index++) {
    num2 = num2 + index;
    console.log(num2);
}

let num3 = 0;
for (let index = 574; index < 815; index++) {
    num3 = num3 + index;
    console.log(num3);
}
console.clear();

let num4 = 0
for (let index = -50; index <=50; index++) {
    num4 = num4 + index;
    console.log(num4);
}
console.log(num4)
console.log('end loop1');

let num5 = 0;
for (let index = -70; index <= 30; index++) {
    num5 = num5 + index;
    console.log(num5);
}
console.log(num5)
console.log('end loop2');

//Uzduotis #2

let normal = "abcdef";
let reversed = "";

for (let index = normal.length -1; index >= 0; index--) {
    reversed = reversed + normal[index];
    console.log(reversed);
}
console.clear();

//Uzduotis #3

let counter1 = 0;
let counter2 = 0;
let counter3 = 0
for (let index = 0; index <= 11; index++) {
    
    if (index % 3 == 0){
        counter1++;
    } 
    if (index % 5 == 0) {
        counter2++;
    } 
    if (index % 7 == 0) {
        counter3++;
    }

}
console.log(`Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 3 yra ` + counter1 + ` vienetai.`);
console.log(`Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 5 yra ` + counter2 + ` vienetai.`);
console.log(`Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 7 yra ` + counter3 + ` vienetai.`);
console.log('END');

let counter4 = 0;
let counter5 = 0;
let counter6 = 0
for (let index = 8; index <= 31 ; index++) {
    
    if (index % 3 == 0){
        counter4++;
    } 
    if (index % 5 == 0) {
        counter5++;
    } 
    if (index % 7 == 0) {
        counter6++;
    }

}
console.log(`Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 3 yra ` + counter4 + ` vienetai.`);
console.log(`Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 5 yra ` + counter5 + ` vienetai.`);
console.log(`Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 7 yra ` + counter6 + ` vienetai.`);

console.log('END');

let counter7 = 0;
let counter8 = 0;
let counter9 = 0
for (let index = -18; index <= 18 ; index++) {
    
    if (index % 3 == 0){
        counter7++;
    } 
    if (index % 5 == 0) {
        counter8++;
    } 
    if (index % 7 == 0) {
        counter9++;
    }

}
console.log(`Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 3 yra ` + counter7 + ` vienetai.`);
console.log(`Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 5 yra ` + counter8 + ` vienetai.`);
console.log(`Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 7 yra ` + counter9 + ` vienetai.`);



