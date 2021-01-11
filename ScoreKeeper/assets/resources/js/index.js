const p1button = document.querySelector('#p1Button');
const p2button = document.querySelector('#p2Button');
const resetbutton = document.querySelector('#resetButton');
const p1ScoreDisplay = document.querySelector('#p1ScoreDisplay');
const p2ScoreDisplay = document.querySelector('#p2ScoreDisplay');
const winningScoreSelect = document.querySelector('#winningScore');

let p1Score = 0,
    p2Score = 0;
let winningScore = 0;

let isGameOver = false;


winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(winningScoreSelect.value);
    reset();
});


p1Button.addEventListener('click', function() {
    //alert('+1 to P1')
    if (!isGameOver) {
        if (p1Score !== winningScore) {
            p1Score++;
            p1ScoreDisplay.textContent = p1Score;
            if (p1Score === winningScore) {
                isGameOver = true;
                p1ScoreDisplay.classList.add("winner")
                p2ScoreDisplay.classList.add("loser")
            }
        }
    }



});
p2Button.addEventListener('click', function() {
    //alert('+1 to P2')
    if (!isGameOver) {
        if (p2Score !== winningScore) {
            p2Score++;
            p2ScoreDisplay.textContent = p2Score;
            if (p2Score === winningScore) {
                isGameOver = true;
                p2ScoreDisplay.classList.add("winner")
                p1ScoreDisplay.classList.add("loser")
            }
        }
    }


});
resetbutton.addEventListener('click', reset)

function reset() {
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p1ScoreDisplay.textContent = p1Score;
    p2ScoreDisplay.textContent = p2Score;
    p2ScoreDisplay.classList.remove("winner", "loser")
    p1ScoreDisplay.classList.remove("winner", "loser")
}