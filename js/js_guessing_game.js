var guesses = 0;
var colorRandom;
var color = ["aqua", "black", "blue", "brown", "chocolate", "cyan", "gold", "gray", "green", "indigo", "ivory",
"lavender", "lime", "magenta", "maroon", "navy", "olive", "orange", "orchid", "pink", "purple", "red",
"silver", "tan", "teal", "violet", "white", "yellow"];

// generate a random color from the array
function generateColor() {
	colorRandom = color[Math.floor(Math.random() * color.length)];
	alert("the color I'm thinking of is: " + colorRandom);
}

// prompt for user input, asking which color
function promptColor(userInput) {
	userInput = prompt("select a color! \n" + color.join(', '));
	alert("you selected " + userInput);
	guesses += 1;
	return userInput;
}

// prompt for user color and then check if it is == randomly generated color
function compareColor() {

	var finished = false;

	while (!finished)	{
		var userInput;
		guessInput = promptColor(userInput);
		var i;
		if (guessInput == colorRandom) {
			alert("You got it! The color is " + guessInput);
			document.body.style.backgroundColor = colorRandom;
			finished = true;
		}
		else {
			alert("You guessed: " + guessInput + ".\nThat is incorrect.");

			var strColorRandom = colorRandom.slice(0,3);
			var strGuessInput = guessInput.slice(0,3);

			if (strColorRandom > strGuessInput)	{
				alert("Your guess is alphabetically too low.");
			}
			else if (strColorRandom < strGuessInput){
				alert("Your guess is alphabetically too high.");
			}
			finished = false;
		}
	}
}

function result() {
	if (guesses > 1) {
		alert("It took you " + guesses + " guesses.");
	}
	else if (guesses = 1) {
		alert("It took you just " + guesses + " guess. You are a frickin genius!");
	}
}

generateColor();
compareColor();
result();


//alert(color.indexOf("red"));
/*
if (color.indexOf(guess_input) == indexOf(color)) {
	alert("You got it! The color is " + guess_input);
}
else {
	alert("You guessed: " + guess_input + ".\nThat is incorrect.");
}
*/


/* End Testing Section */


// body onload - run this function
/*
function do_game() {
	var random_number = Math.random() * 100;
	var random_number_integer = Math.floor(random_number);	// throw away the (.) decimal place
	target = random_number_integer + 1;

	while (!finished) {
		guess_input_text = prompt(  "I am thinking of a color: \n\n "
									+	color.join(", ") +
									"\n\nWhat is the color?");
		guess_input = parseInt(guess_input_text);
		guesses += 1;
		finished = check_guess(); // our loop is only finished when this second function returns true
	}
}


function check_guess() {
	if (isNaN(guess_input)) {
		alert("You have not entered a color.\n\n" +
				"Please enter one of the colors listed.");
		return false;
	}
	if ((guess_input < 1) || (guess_input > 100)) {
		alert("Please enter an integer number in the range 1 to 100.");
		return false;
	}
	if (guess_input > target) {
		alert("Your number is too large!");
		return false;
	}
	if (guess_input < target) {
		alert("Your number is too small");
		return false;
	}
	alert("You got it! The number was " + target +
			".\n\nIt took you " + guesses +
			" guesses to get the number!");
	return true;
}
*/
