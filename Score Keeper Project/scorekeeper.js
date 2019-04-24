const p1Button = document.querySelector('#p1');
const p2Button = document.querySelector('#p2');
const resetButton = document.querySelector('#reset');
let playingTo = document.querySelector('#playingSpan');
let numInput = document.querySelector('input');
let p1Display = document.querySelector('#p1Display');
let p1Score = 0;
let p2Display = document.querySelector('#p2Display');
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

p1Button.addEventListener('click', function() {
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			p1Display.classList.add('winner');
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener('click', function() {
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			p2Display.classList.add('winner');
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener('click', function() {
	p1Score = 0;
	p2Score = 0;
	p1Display = 0;
	p2Display = 0;
	p1Display.classList.remove('winner');
	p2Display.classList.remove('winner');
	gameOver = false;
});

numInput.addEventListener('change', function() {
	playingTo.textContent = numInput.value;
	winningScore = numInput.value;
});
