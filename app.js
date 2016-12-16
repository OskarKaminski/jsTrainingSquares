var clickIndex;
var randomSquares;

function startGame(){
    $('#result').text('');
    clickIndex = 0;
    randomSquares = getRandomNumbers(4);
    highlightSquares(randomSquares, yourTurn);
}

function yourTurn(){
    $('.square').on('mousedown', function (e) {
        var clickedNumber = e.currentTarget.dataset.number;
        highlightSquare(clickedNumber, 200, 'red', true);

        $(this).on('mouseup', hideHighlight);

        if(clickedNumber != randomSquares[clickIndex]){
            return endGame('lost');
        } else if(randomSquares.length-1 === clickIndex) {
            return endGame('won')
        }

        clickIndex++;
    });
}

function endGame(result) {
    $('#result').text('You ' + result);
}

$('#start').click(startGame);