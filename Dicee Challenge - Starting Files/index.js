function randomNumber() {
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);
    let getWinner = document.getElementById('getWinner');
    let firstDice = document.getElementById('firstDice');
    let secondDice = document.getElementById('secondDice');
    firstDice.setAttribute('src', `./images/${'dice' + randomNumber1}.png`)
    secondDice.setAttribute('src', `./images/${'dice' + randomNumber2}.png`)

    if (randomNumber1 < randomNumber2) {
        getWinner.innerHTML = 'Player 2 win';
    } else if (randomNumber1 == randomNumber2) {
        getWinner.innerHTML = 'Draw';
    } else {
        getWinner.innerHTML = 'Player 1 win';
    }

}

randomNumber();