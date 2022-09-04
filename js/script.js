//ruch komputera
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

    function getMoveName(argMoveId) {
        if(argMoveId == 1){
          return 'kamień';
        }
        else if(argMoveId == 2) {
            return 'papier'
        }  
        else if(argMoveId == 3) {
            return 'nożyce'
        } 
        else {
          printMessage('Nie znam ruchu o id ' + argMoveId + '.');
          return 'nieznany ruch';
        }
    }




//ruch gracza

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
  }
else if(playerInput == '3'){
    playerMove = 'nożyce';
  }
else {printMessage('Twój ruch to: ' + playerMove)};



/*
//ruch komputera i gracza
function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    else if(argMoveId == 2) {
        return 'papier'
    }  
    else if(argMoveId == 3) {
        return 'nożyce'
    } 
    else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
}
    
  */



//wynik

function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    
    if (argComputerMove == playerMove) {
        printMessage('Remis');
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Przegrywasz!');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Przegrywasz!');
    }
    else if (cargComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Przegrywasz!');
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Przegrywasz!');
    }
    else {printMessage('Nieznany ruch')}

}




