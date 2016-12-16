function getRandomNumbers(n) {
    var numbers = [];

    for (var i = 0; i < n; i++) {
        numbers[i] = Math.ceil(Math.random() * 4);
    }

    return numbers;
}