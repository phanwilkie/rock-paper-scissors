//Computer randomises between rock, paper and scissors
function getComputerChoice() {
    const computerChoices = ["Rock","Paper","Scissors"];
    const randomChoice = Math.floor(Math.random() * computerChoices.length);
    const computerSelection = computerChoices[randomChoice].toUpperCase();
    return computerSelection; 
};

function playRound(playerSelection, computerSelection) {
    let result = [];

    //Evaluate Computer vs Human result
    if (playerSelection == computerSelection) {
        // console.log("It's a tie! - You: " + playerSelection + " vs Computer: " + computerSelection);
        let roundResult = 'Tied';
        let result = [playerSelection, computerSelection, roundResult];
        return result;
    }
    else if (playerSelection == "ROCK") { //if human choice is rock
        if (computerSelection == "SCISSORS") {
            // console.log("Congrats! You won! - You: " + playerSelection + " vs Computer: " + computerSelection);
            let roundResult = 'Win';
            let result = [playerSelection, computerSelection, roundResult];
            return result;
        }
        else {
            // console.log("Sorry! You've lost, better luck next time. - " + playerSelection + " vs You: " + computerSelection);
            let roundResult = 'Lost';
            let result = [playerSelection, computerSelection, roundResult];
            return result;
            };
    }
    else if (playerSelection == "PAPER") { //if human choice is paper
        if (computerSelection == "ROCK") {
            // console.log("Congrats! You won! - You: " + playerSelection + " vs Computer: " + computerSelection);
            let roundResult = 'Won';
            let result = [playerSelection, computerSelection, roundResult];
            return  result;
        }
        else {
            // console.log("Sorry! You've lost, better luck next time. - " + playerSelection + " vs You: " + computerSelection);
            let roundResult = 'Lost';
            let result = [playerSelection, computerSelection, roundResult];
            return result;
        };
    }
    else { //if human choice is scissors
        if (computerSelection == "PAPER") {
            // console.log("Congrats! You won! - You: " + playerSelection + " vs Computer: " + computerSelection);
            let roundResult = 'Win';
            let result = [playerSelection, computerSelection, roundResult];
            return result;
        }
        else {
            // console.log("Sorry! You've lost, better luck next time. - " + playerSelection + " vs You: " + computerSelection);
            let roundResult = 'Lost';
            let result = [playerSelection, computerSelection, roundResult];
            return result;
        };
    };
};

//keep tabs of round results
let currentRound = 1;
const totalRounds = 6;

function game() {

    let buttonChoice = document.querySelectorAll('.image-buttons');

    const roundTitle = document.querySelector('.round-number');
    const roundTitleNumber = document.createElement('h2');

    roundTitleNumber.textContent = "Round " + currentRound;
    roundTitle.appendChild(roundTitleNumber);

    buttonChoice.forEach(button => {
            button.addEventListener('click', () => {
            const buttonPlayerValue = button.getAttribute('value').toLocaleUpperCase();
            if (currentRound < totalRounds) {
                const result = playRound(buttonPlayerValue, getComputerChoice());
                console.log('Round ' + currentRound+ " - " + result[0] + " " + result[1] +" "+ result[2]);
                
                //output each round's result to HTML
                const roundDiv = document.querySelector('.round-results');
                const roundPara = document.createElement('p');
                roundPara.textContent = 'Round ' + currentRound+ " - " + result[0] + " vs " + result[1] +". You've "+ result[2] + "!";
                roundDiv.appendChild(roundPara);

                roundTitleNumber.textContent = "Round " + currentRound;
                
                if (result[2] == 'Tie') {
                    currentRound;
                }
                else {
                    currentRound++;
                };

                //output to HTML
                if (currentRound === totalRounds) {
                    
                    const gameDiv = document.querySelector('.game-result');
                    const gamePara = document.createElement('h1');
                    const resetButton = document.createElement('button');

                    gamePara.textContent = 'GAME OVER';

                    resetButton.textContent = 'Restart the game';
                    resetButton.setAttribute('onClick',"window.location.reload();");

                    gameDiv.appendChild(gamePara);
                    gameDiv.appendChild(resetButton);
                    document.querySelector('.intro-text').textContent = 'Game over - click the restart button to play again.';

                };

                };
                        
            });      
    });
};
            
window.onload = game;

//to do ->
//output results to DOM
//on game over a button will appear and user can click on the button to reset the game