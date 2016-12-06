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

var i = 0;

// pociągnąć z brancha oskar-squares



// console.log(getRandomNumbers(3));

// selektor jQuerowy do klasy; listener na zdarzenia typu click
$('.inline').click(function(zdarzenie) {
    console.log(zdarzenie);
});