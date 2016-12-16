function highlightSquares(array) {
    for(var i = 0; i<array.length; i++){
        (function(number) {

            setTimeout(function(){
                highlightSquare(number);
                setTimeout(hideHighlight, 1000);
            }, i * 1500);

        })(array[i])

    }
}

function highlightSquare(number) {
    $('#square' + number).css({
        'background-color': 'yellow'
    });
}

function hideHighlight() {
    $('.square').css({
        'background': 'none'
    });
}