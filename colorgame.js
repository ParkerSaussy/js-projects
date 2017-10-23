var numSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");

var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++)
{
	modeButtons[i].addEventListener("click", function() {
	modeButtons[0].classList.remove("selected");
	modeButtons[1].classList.remove("selected");
	this.classList.add("selected");
	this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
	reset();
	});
}

function reset() {
//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	//change colors of squares
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++)
		{
			if (colors[i]){
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none";
			}
		}
	//Revert the h1
	h1.style.backgroundColor = "steelblue";
	}

/*
easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++)
	{
		if (colors[i])
			{
				squares[i].style.backgroundColor = colors[i];
			}
		else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});
*/

resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	//change colors of squares
	messageDisplay.textContent = "";
	for (var i=0; i < squares.length; i++)
		{
			squares[i].style.background = colors[i];
		}
	//Revert the h1
	h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++)
	{
		//initial colors
		squares[i].style.backgroundColor = colors[i];

		//Click listeners for the squares
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			
			if(clickedColor === pickedColor)
				{
					messageDisplay.textContent = "Correct!";
					changeColors(clickedColor);
					h1.style.backgroundColor = clickedColor;
					resetButton.textContent = "Play Again?"
				}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++)
		{
			squares[i].style.background = color;
		}
}

function pickColor() 
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make array
	var arr = []
	//add num random colors to array
	for (var i = 0; i < num; i++)
		{
			arr.push(randomColor());
		}
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a green from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}




