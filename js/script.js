console.log('moves:', argComputerMove, argPlayerMove);

function displayResult(argComputerMove, argPlayerMove) {

    if (computerMove == playerMove) {
        printMessage('Remis');
    }
    else if (computerMove == 'kamień' && playerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    }
    else if (computerMove == 'papier' && playerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    }
    else if (computerMove == 'kamień' && playerMove == 'nożyce') {
        printMessage('Przegrywasz!');
    }
    else if (computerMove == 'papier' && playerMove == 'kamień') {
        printMessage('Przegrywasz!');
    }
    else if (computerMove == 'nożyce' && playerMove == 'papier') {
        printMessage('Przegrywasz!');
    }
    else if (computerMove == 'nożyce' && playerMove == 'kamień') {
        printMessage('Przegrywasz!');
    }
    else {printMessage('Nieznany ruch')}

}