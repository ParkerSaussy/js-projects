var b1 = document.querySelector("#p1")
var b2 = document.getElementById("p2")
var resetButton = document.getElementById("reset")
var p1display = document.querySelector("#p1display")
var p2display = document.querySelector("#p2display")
var numInput = document.querySelector("input")
var p = document.querySelector("p")
var winningScoreDisplay = document.querySelector("p span")
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;


///First Button
b1.addEventListener("click", function() 
{
if (!gameOver)
	{
		p1score++;
		if (p1score == winningScore)
			{
				gameOver = true;
				p1display.classList.add("winner");
			}
		p1display.textContent = p1score;
	}
});

///Second Button
b2.addEventListener("click", function() 
{
if (!gameOver)
	{
		p2score++;
		if (p2score == winningScore)
			{
				gameOver = true;
				p2display.classList.add("winner");
			}
		p2display.textContent = p2score;
	}
});

resetButton.addEventListener("click", function() 
{
reset();
});

function reset() 
{
	p1score = 0;
	p2score = 0;
	p1display.textContent = 0;
	p2display.textContent = 0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver = false;
};

numInput.addEventListener("change", function()
{
	winningScoreDisplay.textContent = numInput.value;
	winningScore = numInput.value;
	reset();
});

