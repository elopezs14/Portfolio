const p1button = document.querySelector('#p1Button')
const p2button = document.querySelector('#p2Button')
const resetbutton = document.querySelector('#resetButton')


p1Button.addEventListener('click', function() {
    alert('+1 to P1')

});
p2Button.addEventListener('click', function() {
    alert('+1 to P2')

});
resetbutton.addEventListener('click', function() {
    alert('Resetting')

});