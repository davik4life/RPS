// My Play Function
const comptRandom = ["rock", "paper", "scissors"];
let player1 = 0;
let computerplay = 0;

// begin with a function called computerPlay that will randomly return either 
// ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make 
// the computer’s play. Done!

function computerPlay() {
	let randomElement = comptRandom[Math.floor(Math.random() * comptRandom.length)];
	return randomElement;
}


// A helper function to help reset the game when called.
function reset(){
	rounds = 1;
	player1 = 0; 
	computerplay = 0;
}


// The function that plays the game.

function playRound (playerSelection, computerSelection){
	if (playerSelection == computerSelection) {
		return `It's a tie! Both played ${computerSelection}`;
		// for Compt. Paper and Player Rock, Compt Wins!
	}else if (computerSelection == "paper" && playerSelection.toLowerCase() == "rock") {
		computerplay++;
		return `Computer Win! ${computerSelection} covers ${playerSelection}`;
		// for Compt. Scissors and Player Paper
	}else if (computerSelection == "Scissors" && playerSelection.toLowerCase() == "paper"){
		computerplay++;
		return `Computer Win! ${computerSelection} cuts off ${playerSelection}`;
		// for Compt. Rock and Player Scissors
	}else if (computerSelection == "rock" && playerSelection.toLowerCase() == "scissors"){
		computerplay++;
		return `Computer Win! ${computerSelection} destroys ${playerSelection}`;
		// for Player paper and Compt. Rock. Player Wins
	}else if(computerSelection == "rock" && playerSelection.toLowerCase() == "paper"){
		player1++;
		return `You Win! ${playerSelection} covers ${computerSelection}`;
		// for Player scissors and Compt. paper Player Wins
	}else if(computerSelection == "paper" && playerSelection.toLowerCase() == "scissors"){
		player1++;
		return `You Win! ${playerSelection} shreds ${computerSelection}`;
		// for Player rock and Compt. scissors
	}else if(computerSelection == "scissors" && playerSelection.toLowerCase() == "rock"){
		player1++;
		return `You Win! ${playerSelection} smashes ${computerSelection}`;
	}
}

let rounds = 1;
function game(){
	
	console.log(`================ ROUND ${rounds} ================`);
	console.log(`       We have 5 Rounds in this game!            `);
	console.log(`================ ROUND ${rounds} ================`);
	while (rounds <= 5){
		console.log(`================ ROUND ${rounds} ================`);
		console.log(playRound(prompt("Enter either Rock, Paper, or Scissors", "rock"), computerPlay()));
		rounds++;

	}
	
	if(player1 == computerplay){
		return `It's a Tie Final Score is: ${player1} / ${computerplay}`;
	}else if (player1 > computerplay) {
		return `You Win! Final Score is: ${player1} / ${computerplay}`;
	}else{
		return `Computer Win! Final Score is: ${player1} / ${computerplay}`;
	}
	
	
}

const repeat = prompt("Round Over!!! Hope you Enjoyed the game. Do You want to play again?", "yes");
if((repeat != null || repeat != undefined) && repeat == "yes"){
	console.log("Starting a new game again!!! Enjoy!");
	reset();
	game();
}else if (repeat == "no"){
	console.log("Thanks for your time. To play again, just call game(), Goodbye!!!");
	reset();
}

