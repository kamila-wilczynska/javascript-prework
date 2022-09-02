function playGame(){

    function playGame(playerInput) {
        clearMessage();
        printMessage('<hr>');

        const score = displayResult;
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);
        const getMoveName = function (argMoveID) {
            if (argMoveID === 1) {
                return stone;
            } else if (argMoveID === 2) {
                return paper;
            } else if (argMoveID === 3) {
                return scissors;
            } else {
                printMessage('Nie znam ruchu o ID ' + argMoveID + '.');
                return 'nieznany ruch';
            }
        }

/*

if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = 'papier';
}
else (randomNumber == 3){
    computerMove = 'nożyce';
}
*/





//Ruch Gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);



let playerMove = getMoveName(randomNumber);{

/*
if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput  == '2'){
    playerMove = 'papier';
}
else(playerInput) == '3'{
    playerMove == 'nożyce';
}
*/
printMessage('Twój ruch to: ' + playerMove);
console.log('Ruchy graczy: ', computerMove,playerMove)
console.log('Gracz wybrał: ' + playerInput);
const playerMove = getMoveName(playerInput);
printMessage('Twój ruch: ' + playerMove);
score(computerMove, playerMove);
console.log('Ruchy graczy: ', computerMove, playerMove);
printMessage('<hr>');
}



//button



}