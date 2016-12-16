/**
 * Created by michal.wolosiak on 12/6/2016.
 */

/*
    Takie chcemy dostać wyniki:
    [4, 2, 2]
    [3, 3, 3]
    [1, 4, 3]
 */

// podświetlenie kolorem przez jedną sekundę pól z tablicy po kolei
// id do elementów
// przechwycenie kliknięcia (i który element kliknięty)
// trackowanie które kliknięcie
// sprawdzenie czy id elementu klikniętego === elementowi tablicy
// wyświetlenie w console logu

function getRandomNumbers(n) {
    var i;
    var sekwencja = [];     // tu jest zadeklarowana zmienna i zadeklarowana jako tablica ---> sekwencja = new Array;
    for (i = 0; i < n; i++) {
        sekwencja[i] =  Math.ceil(Math.random() * 4);   // bo chcemy, żeby maksymalna liczba zwrócona była równa 4, np. 0.998 x 4 <= 4
    }
    return sekwencja;
}
//console.log(getRandomNumbers(3));

function highlightSingleSquare(id) {
    $('#sq' + id).css({
        'background-color': 'hotpink'
    });
}

function dehighlightSingleSquare(id) {
    $('#sq' + id).css({
        'background': 'none'
    });
}

function highlightSequenceOfSquares(sekwencja) {
    // gorszy sposób - z rekurencją:
/*    if (i < sekwencja.length) {
        highlightSingleSquare(sekwencja[i]);
        setTimeout(function() {
            dehighlightSingleSquare(sekwencja[i]);
            i++;
            setTimeout(function() {highlightSequenceOfSquares(sekwencja)}, 100);
            //setTimeout(highlightSequenceOfSquares.bind(this, sekwencja), 100); // równoważne - poczytać o bind
        }, 400);
    }*/
    // lepszy sposób - bez rekurencji:
    for (var i = 0; i<sekwencja.length; i++) {
        (function(number) {
            setTimeout(function() {
                highlightSingleSquare(number);
                setTimeout(function() {dehighlightSingleSquare(number)}, 400)
            }, i * 500)
        })(sekwencja[i]);
    }
}





//highlightSequenceOfSquares(getRandomNumbers(4));


// pociągnąć z brancha oskar-squares



// console.log(getRandomNumbers(3));

// selektor jQuerowy do klasy; listener na zdarzenia typu click
/*$('.square').click(function(zdarzenie) {
    console.log(zdarzenie);
});*/



// Id do elementów
// przechwycenie kliknięcia
// Przechwycenie jaki element kliknięty
// Trackowanie, które kliknięcie
// Sprawdzenie czy id elementu klikniętego === elementowi tablicy
// Wyświetlenie w console logu "wygrałeś" / "Przegrałeś"


// Podświetlenie kolorem przez 1 sekundę pól z tablicy po kolei

/*
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
});*/
