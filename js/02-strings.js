console.clear();

const firstname = 'Maryte';
console.log(firstname);

const lastname = "Marytaite";
console.log(lastname);  

console.log('Labas rytas,', firstname, '!');

console.log('Labas rytas,' + firstname + '!');

const pasisveikinimas = 'Labas rytas, ' + firstname + '!';
console.log(pasisveikinimas);

//Uzduotis #2

const string1 = "a";
console.log(string1);
const string2 = "b";
console.log(string2);
const string3 = "c";
console.log(string3);

//Kabutes

const kabute = 'Vienguba (\') ir dviguba (\") kabutes';
console.log(kabute)

const kabute2 = `Vienguba (') ir dviguba (") kabutes`;

const kabuteAll = `Kabutes: \'\"\`.`;

// \n
// \r
// \t
// \?

const logoPath = './logo.png';
const HTML = `<header>
<img src="${logoPath}" alt="Logo">
    <nav>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
    </nav>
</header>`;
console.log(HTML);

//Your lucky number is 7. Congrats!

const userNumber = 7;

console.log(`Your lucky number is ${userNumber}. Congrats!`);

