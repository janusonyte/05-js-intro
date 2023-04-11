console.clear();

/**
 * OBJECT - objektas
 * 
 * {key: value}
 */

const emptyObject = {};

console.log(emptyObject);

const user = {
    name: "Petras",
    age: 99,
    isMarried: true,
    eyeColour: "blue",
};

console.log(user);
const sayHi = `Sveiki, as esu ${user['name']} ir man yra ${user['age']} metu`;
console.log(sayHi)

const sayHi2 = `Sveiki, as esu ${user.name} ir man yra ${user.age} metu`;
console.log(sayHi2)