const stone = 'kamień';
const paper = 'papier';
const scissors = 'nożyce';

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

console.log('moves:', argComputerMove, argPlayerMove);
function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Ja zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if (argComputerMove === argPlayerMove) {
        printMessage('Remis!');
    } else if ((argComputerMove === paper && argPlayerMove === stone) || (argComputerMove === stone && argPlayerMove === scissors) || (argComputerMove === scissors && argPlayerMove === paper)) {
        printMessage('Komputer wygrywa.');
    } else printMessage('Graczu wygrywasz! :)');
}

console.log(argComputerMove, argPlayerMove);