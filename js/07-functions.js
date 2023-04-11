console.clear();

/**
 * FUNCTIONS
 */
const kursas = 1.5;
const konvertavimoMokestis = 1;

const pinigine1 = 2;
const pinigine2 = 4;
const pinigine3 = 100;

const verte1 = pinigine1 * kursas - konvertavimoMokestis;
const verte2 = pinigine2 * kursas - konvertavimoMokestis;
const verte3 = pinigine3 * kursas - konvertavimoMokestis;

function convertMyMoney (sumaEurais) {
    // console.log('Bankas gavo: ' + sumaEurais)
    return sumaEurais * kursas - konvertavimoMokestis;
}

console.log(verte1);
console.log(verte2);
console.log(verte3);

const dollars1 = convertMyMoney(pinigine1);
const dollars2 = convertMyMoney(pinigine2);
const dollars3 = convertMyMoney(pinigine3);

// console.log(dollars1);
// console.log(dollars2);
// console.log(dollars3);

