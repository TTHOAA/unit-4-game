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

    $('#c1').data('value',c1); //gives crystals an attribute, 'value', that hold their respective random values
    $('#c2').data('value',c2);
    $('#c3').data('value',c3);
    $('#c4').data('value',c4);
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
$('.crystal').on('click', (event) => {
    let crystal = $(event.currentTarget).data('value'); //sets crystal to equal the value of the crystal that has been clicked
    currentNumber = currentNumber+crystal; //adds crystals value to current total
    $('#current').text(currentNumber); //displays new current total
    winOrLose();
   
})

})