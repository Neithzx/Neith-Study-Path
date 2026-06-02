const button = document.querySelector("button");

function greet() {
    const name = prompt("What is your name?");
    const greeting =  document.querySelector("#greeting");
    greeting.textContent = `Hello, ${name} nice to see you!`;
}


button.addEventListener("click", greet);

// Concatenation using "+" 

const greeting2 = "Hello";
const name2 = "Neith";
console.log(greeting2 + " , " + name2 );

// However, template literals usually give you more readable code:

const greeting3 = "Hello";
const name3 = "Neith";
console.log(`${greeting3} , ${name3}`);


// Including expressions in strings,

const song = "Me pierdo en el deseo"
const score = 9;
const highScore = 10;
const ouput = `Me gusta the song ${song} Y en la escala de mis gustos tiene un ${
(score / highScore) * 100
}% de que sea de mi agrado)`;

console.log(ouput);

const newline = `one day you finally knew
what you had to do, and began.`

console.log(newline);

const newline2 = `one day you finally knew\nwhat you had to do, and began`;
console.log(newline2);

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);


const coolBandName = "tavako";
const numberbands = 342;

console.log(`${coolBandName}, ${numberbands}`);

