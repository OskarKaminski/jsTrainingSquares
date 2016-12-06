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
             hilightSquares(arrayNumbers, i);
         }, 1000);
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

 var randomNumbers = getRandomNumbers(5);
hilightSquares(randomNumbers, 0);

console.log(randomNumbers);

$('.square').click(function(e){
    console.log(e);
});