/**
 * Created by sebastian.glowacki on 06.12.2016.
 */
function getRandomNumbers(n) {

    var randomNumbers = [];
    for(var i = 0; i < n; i++)
    {
        var randomNumber = Math.ceil(Math.random() * 4);
         randomNumbers.push(randomNumber)
    }

    return randomNumbers;
}

function hilightSquares(arrayNumbers, i) {
     if(i < arrayNumbers.length) {
         hilightSingleSquare(arrayNumbers[i]);
         setTimeout(function() {
            hideHilight(arrayNumbers[i]);
            i++;
            setTimeout(function(){
                hilightSquares(arrayNumbers, i);
            }, 500);
         }, 1000);
     }
     else {
        alert("Now is your turn to show the right order");
        canClick = true;
    }
 }

 function hilightSingleSquare(n) {
     $('.container').find("[data-number=" + n + "]").css({
         'background-color': "yellow"
     });
 }

 function hideHilight(n) {
     $('.container').find("[data-number=" + n + "]").css({
         'background': "none"
     });
 }

 function getSquareNumber(square) {
     return square.data().number;
 }

 function isWinner(clickCount, clickedNu) {

 }

var randomCount = 1;
var clickCount;
var randomNumbers;
var canClick;

function initGame() {
    canClick = false;
    clickCount = 0;
    randomNumbers = getRandomNumbers(randomCount);
    hilightSquares(randomNumbers, 0);
    console.log(randomNumbers);
}

initGame();

$('.square').click(function() {
    if(!canClick) return;

    var clickedSquareNumber = getSquareNumber($(this));
    clickCount++;
    var arrayIndex = clickCount - 1;
    
    if(clickedSquareNumber === randomNumbers[arrayIndex]) {
        if(clickCount == randomNumbers.length) {
            alert("You've won");
            randomCount++;
            initGame();
        }
    }
    else {
        alert("You've LOST");
        randomCount = 1;
        initGame();
    }
});