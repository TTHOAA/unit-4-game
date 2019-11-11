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
function randomizeCrystals(){
    c1= Math.floor((Math.random()*12)+1);
    c2= Math.floor((Math.random()*12)+1);
    c3= Math.floor((Math.random()*12)+1);
    c4= Math.floor((Math.random()*12)+1);
    console.log(c1 , c2 , c3 , c4)
}

randomizeCrystals();

let currentNumber = 0;
$('#current').text(currentNumber);
$('#c1').on('click', () => {
    currentNumber = currentNumber+c1;
    $('#current').text(currentNumber);
})

$('#c2').on('click', () => {
    currentNumber = currentNumber+c2;
    $('#current').text(currentNumber);
})

$('#c3').on('click', () => {
    currentNumber = currentNumber+c3;
    $('#current').text(currentNumber);
})

$('#c4').on('click', () => {
    currentNumber = currentNumber+c4;
    $('#current').text(currentNumber);
})

if (currentNumber == luckyNumber){
    victories=victories+1;
    $('#wins').text('Wins: '+victories);
}

else if(currentNumber > luckyNumber){
    defeats = defeats+1;
    $('#losses').text('Losses: '+defeats);
}

})