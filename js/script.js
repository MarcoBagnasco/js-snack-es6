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
console.log(lightBike);
for(let i = 1; i < bikes.length; i++){
    // Set lightBike
    if(bikes[i].weight < lightBike.weight){
        lightBike = bikes[i];
    }
}

// Assign lightBike property to variables
const {name, weight} = lightBike;

// Print in console with Template Literal
console.log(`La bici più leggera è la ${name}, che pesa ${weight}kg!`);

// Print in HTML
const bikesList = document.getElementById('bikes-list'); //Reference

let output = '';

// Print Array
bikes.forEach(element =>{
    output += 
    `<li>
        <div><i class="fas fa-bicycle"></i></div>
        <div>${element.name}</div>
        <div>${element.weight} Kg</div>
    </li>`;
});

bikesList.innerHTML = output;

// Print LightBike
document.getElementById('light-bike').innerHTML = `The lightest bike is the ${name}, with a weight of ${weight} kg`;

/***************************
 * SNACK 2
 ***************************/
/**
 * Creare un array di oggetti di squadre di calcio.
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
 * Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

// Array of Objects
const teams = [
    {
        name : 'Milan',
        points : 0,
        fouls : 0,
    },
    {
        name : 'Inter',
        points : 0,
        fouls : 0,
    },
    {
        name : 'Juventus',
        points : 0,
        fouls : 0,
    },
    {
        name : 'Atalanta',
        points : 0,
        fouls : 0,
    },
];

// References
const teamsTable = document.getElementById('teams-table');
const foulsList = document.getElementById('fouls-list');

// Print orignal array in HTML
printHtml();

// Click on gen-btn
document.getElementById('gen-btn').addEventListener('click', () => {
    // New Array
    let newTeams = [];

    for(let i = 0; i < teams.length; i++){
        // Generate Values
        teams[i].points = randomNum(0, 50);
        teams[i].fouls = randomNum(0, 50);
    
        // Destructuring
        let {name, fouls} = teams[i];
    
        // Populate NewArray
        newTeams.push(
            {
                name,
                fouls,
            }
        );
    }
    // Print arrays in HTML
    printHtml();
    printFouls(newTeams);
    
    // Print New Array in console
    console.table(newTeams);
});

/********
 * FUNCTIONS
 ********/
/**
 * Returns random number in a range
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * Print array in HTML in table form
 */
function printHtml(){
    let output = 
            `<tr>
                <th>Team</th>
                <th>Points</th>
                <th>Fouls</th>
            </tr>`;

    teams.forEach(element => {
        output += 
        `<tr><td>${element.name}</td>
             <td>${element.points}</td>
             <td>${element.fouls}</td>
        </tr>`
    });

    teamsTable.innerHTML = output;
}
/**
 * Print array in HTML in list form
 * @param {array} newTeams 
 */
function printFouls(newTeams){
    let output = `<li><strong>Fouls List:</strong></li>`;

    newTeams.forEach(element => {
        output += 
        `<li>${element.name} ${element.fouls}</li>`
    });
    foulsList.innerHTML = output;
}

/***************************
 * SNACK 3
 ***************************/
/**
 * Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
 * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
inseriti dall'utente
 */

// Original Array
const students = ['Paolo', 'Marco', 'Giuseppe', 'Laura', 'Giulia', 'Andrea']; 

// Print Original Array in HTML
output = '';
students.forEach((element,index) => {
    output += `<li><div>${index}</div>'${element}'</li>`
});
document.getElementById('students-list').innerHTML = output;

// References
const inputMin = document.getElementById('min');
const inputMax = document.getElementById('max');

let min = 0; // Start Index
let max = 0; // End Index

// Send Button Click
document.getElementById('send-btn').addEventListener('click', function (event){
    event.preventDefault();

    let statusMin = false;
    let statusMax = false;

    // Check Validity
    if(!(inputMin.value >= 0 && inputMin.value < students.length)){
        alert('Number min out of range');
    } else {
        min = inputMin.value;
        statusMin = true;
    }
    if(!(inputMax.value >= inputMin.value && inputMax.value < students.length)){
        alert('Number max out of range');
    } else {
        max = inputMax.value;
        statusMax = true;
    }
    
    // If Valid
    if(statusMin && statusMax){
        // Create New Array
        const newArray = arrayFromRange(students,min,max);

        // Print New Array in HTML
        output = '';
        newArray.forEach(element => {
            output += `<li>'${element}'</li>`
        });
        document.getElementById('new-students-list').innerHTML = output;
    }
});


// Input Start Index
// do{
//     min = parseInt(prompt(`Enter a number between 0 and ${students.length - 1}`));
//     if(isNaN(min)){
//         alert('You have not entered a number');
//     } else if(!(min >= 0 && min < students.length)){
//         alert('Number out of range')
//     }
// } while(isNaN(min) || !(min >= 0 && min < students.length));

// // Input End Index
// do{
//     max = parseInt(prompt(`Enter a number between ${min} and ${students.length - 1}`));
//     if(isNaN(max)){
//         alert('You have not entered a number');
//     } else if(!(max >= min && max < students.length)){
//         alert('Number out of range')
//     }
// } while(isNaN(max) || !(max >= min && max < students.length));

// Print in console
// console.log(`Original array: ${students}`);
// console.log(`New array: ${newArray}`);

/********
 * FUNCTIONS
 ********/
/**
 * Return new array with element in range
 * @param {array} arr 
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function arrayFromRange(arr, min, max){
    return arr.filter((element, index) => {
        return (index >= min && index <= max);
    });
}

/***************************
 * SNACK 4
 ***************************/
/**
 * Creare array di oggetti indumenti con proprietà 'nome', 'modello', 'tipologia', 'colore'.
 * Scrivere una funzione che generi un numero random tra 10 e 50 e lo inserisca come nuova proprietà 'prezzo' in ogni oggeto dell'array 
 */

// Object's Array
const clothing = [
    {
        name: 'Vicky',
        model: 'skinny',
        type: 'jeans',
        color: 'white',
    },
    {
        name: 'Emily',
        model: 'cut-out',
        type: 'dress',
        color: 'black',
    },
    {
        name: 'John Wayne',
        model: 'biker-boots',
        type: 'shoes',
        color: 'brown',
    },
    {
        name: 'Laura',
        model: 'romantic',
        type: 'body',
        color: 'red',
    },
];

// Print Original Array in HTML
printClothing();

// Array with Price
const clothingPrice = generatePrice(clothing, 10, 50);

document.getElementById('price-btn').addEventListener('click', printPrice);

// Print in console
console.log('Original Array:');
console.table(clothing);
console.log('\n\n\nArray with price:');
console.table(clothingPrice);


/********
 * FUNCTIONS
 ********/
/**
 * Print Array in HTML in table form
 */
function printClothing(){
    let output = 
    `<tr>
        <th>Name</th>
        <th>Model</th>
        <th>Type</th>
        <th>Color</th>
    </tr>`;

    clothing.forEach(element => {
    output += 
    `<tr><td>${element.name}</td>
        <td>${element.model}</td>
        <td>${element.type}</td>
        <td>${element.color}</td>
    </tr>`
    });

    document.getElementById('clothing-table').innerHTML = output;
}
/**
 * Print Array with Price in HTML in table form
 */
function printPrice(){
    let output = 
    `<tr>
        <th>Name</th>
        <th>Model</th>
        <th>Type</th>
        <th>Color</th>
        <th>Price</th>
    </tr>`;

    clothingPrice.forEach(element => {
    output += 
    `<tr><td>${element.name}</td>
        <td>${element.model}</td>
        <td>${element.type}</td>
        <td>${element.color}</td>
        <td>€${element.price}.00</td>
    </tr>`
    });

    document.getElementById('clothing-table').innerHTML = output;
}

/**
 * Generate random price in a range and add it to each object in the array
 * @param {array} arr // array of objects
 * @param {number} min // min price
 * @param {number} max // max price
 * @returns 
 */
function generatePrice(arr, min, max){
    
    return arr.map(element => {
        // Random Price
        const price = Math.floor(Math.random() * (max - min + 1) + min);
        return element = {...element, price};
    });
}