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
        console.log("It's a tie! - You: " + playerSelection + " vs Computer: " + computerSelection);
        let roundResult = 'Tie';
        let result = [playerSelection, computerSelection, roundResult];
        return result;
    }
    else if (playerSelection == "ROCK") { //if human choice is rock
        if (computerSelection == "SCISSORS") {
            console.log("Congrats! You won! - You: " + playerSelection + " vs Computer: " + computerSelection);
            let roundResult = 'Win';
            let result = [playerSelection, computerSelection, roundResult];
            return result;
        }
        else {
            console.log("Sorry! You've lost, better luck next time. - " + playerSelection + " vs You: " + computerSelection);
            let roundResult = 'Lost';
            let result = [playerSelection, computerSelection, roundResult];
            return result;
            };
    }
    else if (playerSelection == "PAPER") { //if human choice is paper
        if (computerSelection == "ROCK") {
            console.log("Congrats! You won! - You: " + playerSelection + " vs Computer: " + computerSelection);
            let roundResult = 'Win';
            let result = [playerSelection, computerSelection, roundResult];
            return  result;
        }
        else {
            console.log("Sorry! You've lost, better luck next time. - " + playerSelection + " vs You: " + computerSelection);
            let roundResult = 'Lost';
            let result = [playerSelection, computerSelection, roundResult];
            return result;
        };
    }
    else { //if human choice is scissors
        if (computerSelection == "PAPER") {
            console.log("Congrats! You won! - You: " + playerSelection + " vs Computer: " + computerSelection);
            let roundResult = 'Win';
            let result = [playerSelection, computerSelection, roundResult];
            return result;
        }
        else {
            console.log("Sorry! You've lost, better luck next time. - " + playerSelection + " vs You: " + computerSelection);
            let roundResult = 'Lost';
            let result = [playerSelection, computerSelection, roundResult];
            return result;
        };
    };
};

//keep tabs of round results
let currentRound = 1;
const totalRounds = 5;

function game() {

    let buttonChoice = document.querySelectorAll('.image-buttons');
    buttonChoice.forEach(button => {
            button.addEventListener('click', () => {
            const buttonPlayerValue = button.getAttribute('value').toLocaleUpperCase();
            if (currentRound <= totalRounds) {
                const result = playRound(buttonPlayerValue, getComputerChoice());
                // console.log('Round ' + currentRound+ " - " + result[0] + " " + result[1] +" "+ result[2]);
                // console.log('Computer Selection ' + computerSelection)
                currentRound++;
                if (currentRound > totalRounds) {
                    console.log('Game Over!')
                }
            }            
            });        
    });
};
            

window.onload = game;

//on game over a button will appear and user can click on the button to reset the game