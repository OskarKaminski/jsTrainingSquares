// Id do elementów
// przechwycenie kliknięcia
// Przechwycenie jaki element kliknięty
// Trackowanie, które kliknięcie
// Sprawdzenie czy id elementu klikniętego === elementowi tablicy
// Wyświetlenie w console logu "wygrałeś" / "Przegrałeś"


// Podświetlenie kolorem przez 1 sekundę pól z tablicy po kolei

function getRandomNumbers(n) {
    var numbers = [];

    for (var i = 0; i < n; i++) {
        numbers[i] = Math.ceil(Math.random() * 4);
    }

    return numbers;
}

var i = 0;

function highlightSquares(array) {
    if(i < array.length){
        highlightSquare(array[i]);
        setTimeout(function() {
            hideHighlight();
            i++;
            highlightSquares(array)
        }, 1000)
    }
}

function highlightSquare(id) {
    $('#square' + id).css({
        'background-color': 'yellow'
    });
}

function hideHighlight() {
    $('.square').css({
        'background': 'none'
    });
}

var randomSquares = getRandomNumbers(3);
highlightSquares(randomSquares);


$('.square').click(function (whateva) {
    var number = whateva.console.log(e);
});