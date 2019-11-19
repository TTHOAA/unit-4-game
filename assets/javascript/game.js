$(document).ready(() => {
let victories= 0; 
let defeats= 0;

$('#wins').append(victories);
$('#losses').append(defeats);



let luckyNumber;
function createLuckyNumber(min,max) { //function creates a random number between and including the min and max values
    luckyNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    $('#randomNumber').text(luckyNumber);
    console.log(luckyNumber);
}

createLuckyNumber(19,120); //luckyNumber will be between 19,120

let c1;
let c2;
let c3;
let c4;
function randomizeCrystals(){ //function assigns each crystal a random value from 1 to 12
    c1= Math.floor((Math.random()*12)+1);
    c2= Math.floor((Math.random()*12)+1);
    c3= Math.floor((Math.random()*12)+1);
    c4= Math.floor((Math.random()*12)+1);
    console.log(c1 , c2 , c3 , c4)
}

randomizeCrystals();

function winOrLose(){
    if (currentNumber == luckyNumber){ //if current total equals the lucky number then a win will be rcorded and all new random values will be produced to begin a new round
        victories=victories+1;
        $('#wins').text('Wins: '+victories);
        currentNumber=0;
        $('#current').text(currentNumber);
        createLuckyNumber(19,120);
        randomizeCrystals();
    }

    else if(currentNumber > luckyNumber){ //if the current total exceeds the lucky number then a new game with new values will start and a loss will be recorded
        defeats = defeats+1;
        $('#losses').text('Losses: '+defeats);
        currentNumber=0;
        $('#current').text(currentNumber);
        createLuckyNumber(19,120);
        randomizeCrystals();
    }
}

let currentNumber = 0;
$('#current').text(currentNumber);
$('#c1').on('click', () => {
    currentNumber = currentNumber+c1; //adds crystals value to current total
    $('#current').text(currentNumber); //displays new current total
    winOrLose()
   
})

$('#c2').on('click', () => {
    currentNumber = currentNumber+c2;
    $('#current').text(currentNumber);
    winOrLose()
    
})

$('#c3').on('click', () => {
    currentNumber = currentNumber+c3;
    $('#current').text(currentNumber);
    winOrLose()
  
})

$('#c4').on('click', () => {
    currentNumber = currentNumber+c4;
    $('#current').text(currentNumber);
    winOrLose()
    
})





})