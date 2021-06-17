var player1RandomNumber = Math.floor(Math.random() * 6) + 1;
var player2RandomNumber = Math.floor(Math.random() * 6) + 1;

document.querySelector('.dice .img1').setAttribute('src', './images/dice' + player1RandomNumber + '.png');
document.querySelector('.dice .img2').setAttribute('src', './images/dice' + player2RandomNumber + '.png');

if (player1RandomNumber > player2RandomNumber) {
    document.querySelector('.container h1').innerHTML = 'Player 1 Wins!'
} else if (player2RandomNumber > player1RandomNumber) {
    document.querySelector('.container h1').innerHTML = 'Player 2 Wins!'
} else {
    document.querySelector('.container h1').innerHTML = 'Draw!'
}
