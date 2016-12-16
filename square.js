function highlightSquares(array, callback) {
    for (var i = 0; i < array.length; i++) {
        (function (number) {

            setTimeout(function () {
                highlightSquare(number);
            }, i * 1500);

        })(array[i])
    }
    setTimeout(callback, array.length * 1500);
}

function highlightSquare(number, time, color, withoutHide) {
    $('#square' + number).css({
        'background-color': color || 'yellow'
    });
    withoutHide === undefined && setTimeout(hideHighlight, time || 1000);
}

function hideHighlight() {
    $('.square').css({
        'background': 'none'
    });
}