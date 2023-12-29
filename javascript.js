//Variables
const playerSelection = "Rock";

//Computer randomises between rock, paper and scissors
function getComputerChoice() {
    const computerChoices = ["Rock","Paper","Scissors"];
    const randomChoice = Math.floor(Math.random() * computerChoices.length);
    return computerSelection = computerChoices[randomChoice];
};

function playRound(playerSelection, computerSelection) {
    //Evaluate Computer vs Human result
    //Output error message based on the rule
        //where the result is tie
        //where the computer wins
        //where the human wins
    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
        return roundResult = 'Tie';
        //need to figure out how to repeat
    }
    else if (playerSelection == "Rock") { //if human choice is rock
        if (computerSelection == "Scissors") {
            console.log("Congrats! You won!");
            return roundResult = 'Win';
        }
        else {
            console.log("Sorry! You've lost, better luck next time.");
            return roundResult = 'Lost';
        };
    }
    else if (playerSelection == "Paper") { //if human choice is paper
        if (computerSelection == "Rock") {
            console.log("Congrats! You won!");
            return roundResult = 'Win';
        }
        else {
            console.log("Sorry! You've lost, better luck next time.");
            return roundResult = 'Lost';
        };
    }
    else { //if human choice is scissors
        if (computerSelection == "Paper") {
            console.log("Congrats! You won!");
            return roundResult = 'Win';
        }
        else {
            console.log("Sorry! You've lost, better luck next time.");
            return roundResult = 'Lost';
        };
    };
};

//keep tabs of round results
function game() {
    let totalRound = 1;
    //loop until max 5 wins or 5 losts
    for (let i = 1; i < 6; i++) {
        playRound(playerSelection, getComputerChoice());
        console.log("Round:" + totalRound);
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log("Round Result: " + roundResult);
        
        //if it's a tie, then the player get to go again
        if (roundResult == 'Tie') {
            i--;
        };
        totalRound++;
    };


};

game();