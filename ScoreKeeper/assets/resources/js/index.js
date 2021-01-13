const resetbutton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#winningScore');

let winningScore = 3;

let isGameOver = false;

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1ScoreDisplay')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2ScoreDisplay')
}

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score
    }
}
winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(winningScoreSelect.value);
    reset();
});


p1.button.addEventListener('click', function() {
    //alert('+1 to P1')
    updateScores(p1, p2);


});
p2.button.addEventListener('click', function() {
    //alert('+1 to P2')
    updateScores(p2, p1);
});
resetbutton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = p1.score;
    p2.display.textContent = p2.score;
    p1.display.classList.remove("has-text-success", "has-text-danger")
    p2.display.classList.remove("has-text-success", "has-text-danger")
    p1.button.disabled = false;
    p2.button.disabled = false;
}