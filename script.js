function computerPlay() {
    const gameWords =[`Rock`, `Paper`, `Scissors`]; 
    return gameWords[Math.floor(Math.random() * gameWords.length)];
}

function determineWinner(playerSelection, computerSelection) {    
    switch (playerSelection) {
        case `rock`:
            if (computerSelection === `paper`) return loseGame;
            if (computerSelection === `rock`) return tieGame;
            if (computerSelection === `scissors`) return winGame;
            break;
        case `paper` :
            if (computerSelection === `paper`) return tieGame;
            if (computerSelection === `rock`) return winGame;
            if (computerSelection === `scissors`) return loseGame;
            break;
        case `scissors`:
            if (computerSelection === `paper`) return winGame;
            if (computerSelection === `rock`) return loseGame;
            if (computerSelection === `scissors`) return tieGame;
            break;
        default: 
            return noGame;
    }
}

function playerInput() {
    let questionForPlayer = prompt(`Let's play! Type down "Rock", "Paper" or "Scissors"`);

    while (questionForPlayer === null) {
        let endGame = confirm("Do you whish to end the game?");
        if (endGame)
            return noGame;
        else 
            questionForPlayer = prompt(`Let's play! Type down "Rock", "Paper" or "Scissors"`);
    }

    let playerSelection = questionForPlayer.toLowerCase().trim();

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
       alert(`Invalid input. Please select "Rock", "Paper" or "Scissors"`);
       return playerInput();
    }

    return playerSelection;
}

function gameRound(index) {
    const playerSelection = playerInput();
    
    if (playerSelection === noGame) return noGame;
    
    const computerSelection = computerPlay().toLowerCase();
    
    let result = determineWinner(playerSelection,computerSelection);
    console.log(`Round ${index+1}: Computer selected: ${capitalizeFirstLetter(computerSelection)}, you selected ${capitalizeFirstLetter(playerSelection)}. ${result}`);
   
    return result;
}

function printResults(playerWin, compWin, roundCount) {
    if (playerWin>compWin){
        console.log(`You played ${roundCount} games, won ${playerWin}, lost ${compWin}. You are the winner!`);
    }
    else if(playerWin<compWin) {
        console.log(`You played ${roundCount} games, won ${playerWin}, lost ${compWin}. You are the looser!`);
    }
    else{
        console.log(`You played ${roundCount} games, won ${playerWin}, lost ${compWin}. It's a tie!`);
    }
}

function game(roundCount) {
    let playerWin = 0;
    let compWin = 0;
    let i =0;

    for (; i<roundCount; i++) {
        
        let result = gameRound(i);
        if (result === winGame) playerWin++;
        if (result === loseGame) compWin++;
        if (result === noGame) break;
    }
    printResults(playerWin, compWin, i);
}

function capitalizeFirstLetter(wordSelected) {
    return wordSelected.charAt(0).toUpperCase() + wordSelected.slice(1);
}

let winGame = `You win!`;
let loseGame = `You lose!`;
let tieGame = `It's a tie!`;
let noGame = `See you next time!`;

game(5);