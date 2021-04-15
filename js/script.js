/***************************
 * SNACK 1
 ***************************/
/**
 * Creare un array di oggetti.
 * Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
 * Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.
 */

// Bikes Objects
const bike1 = {
    name : 'Bianchi',
    weight : 10,
};
const bike2 = {
    name : 'Norco',
    weight : 6,
};
const bike3 = {
    name : 'Graziella',
    weight : 8,
};

// Array of Objects
const bikes = [
    bike1,
    bike2,
    bike3,
];

// Variable for lightest bike
let [lightBike] = bikes;

for(let i = 1; i < bikes.length; i++){
    // Set lightBike
    if(bikes[i].weight < lightBike.weight){
        lightBike = bikes[i];
    }
}

// Assign lightBike property to variables
const {name, weight} = lightBike;

// Print with Template Literal
console.log(`La bici più leggera è la ${name}, che pesa ${weight}kg!`);

