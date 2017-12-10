// Creat an array
const word = ['gift', 'carols', 'snowy', 'cider', 'frosty'];
// Choose word randomly
let randomW = Math.floor(Math.random() * word.length);
let choosenW = word[randomW];
let numberOfGuess = [14];
let rightGuess = [];
let underscore = [];
let wrongGuess = [];
let gameWins = [];
console.log(choosenW);
// DOM 


// Create underscores length of words
const underS = function() {
	for(let i = 0; i < choosenW.length; i++) {
		underscore.push('_');
	};
	return underscore;
};
console.log(underS());

// User interaction
document.addEventListener('keypress', function(event){
	let letter = event.key;
// Check if guess is right	
	if(choosenW.indexOf(letter) > -1){
		console.log(letter);
// add to right words array
		rightGuess.push(letter);
		console.log(rightGuess);
// If right push to underscore	
		underscore[choosenW.indexOf(letter)] = letter;
		console.log(underscore);
		document.querySelector(".underscore").innerHTML = underscore.join('');
// If underscore === to words array alert "You win" and add to wins
		if(underscore.join('') === choosenW){
			gameWins++;
			alert("You Win");
			document.querySelector(".Wins").innerHTML = gameWins;

		}
	}
// If wrong push to wrongGuess and subtract from numberofguess
	else{
		wrongGuess.push(letter);
		numberOfGuess--;
		console.log(wrongGuess);
		document.querySelector(".remainingGuess").innerHTML = numberOfGuess;
		document.querySelector(".keepingTrack").innerHTML = wrongGuess;
	}
//could not reset game 
/*document.getElementById('.reset').onclick = function() {
	    underS.parentNode.removeChild(underS);
	    letter.parentNode.removeChild(letter);
	    showClue.innerHTML = "";
	    context.clearRect(0, 0, 400, 400);
	}
*/
});


