/*firstNumber= random # selector to display first, 
player has to match to this (id="random-number-selector")
secondNumber=second random # selector for the buttons (id="crystals-random-number-selector")
result=total-score (id="total-score") 
winCounter id is win-counter
lossesCounter id is losses-counter*/

// $(document).ready(function() {

// //global variables 
// var firstNumber; 
// var secondNumber;
// var result; 
// var winCounter; 
// var lossesCounter;
// }
var crystalGame = {
		btnOne: 0, 
		btnTwo: 0,
		btnThree: 0,
		btnFour:0,
		firstNum: 0, 
		totalNum:0,
		totalWins:0,
		totalLosses:0,
		reset: function() {
			this.btnOne=Math.ceil(Math.random()*12);
			console.log(this.btnOne);
			this.btnTwo=Math.ceil(Math.random()*12);
			console.log(this.btnTwo);
			this.btnThree=Math.ceil(Math.random()*12);
			console.log(this.btnThree);
			this.btnFour=Math.ceil(Math.random()*12);
			console.log(this.btnFour);
			this.firstNum=Math.ceil(Math.random()* (120 - 19 + 1)) + 19;
			$("#random-number-selector").html('<div class="panel panel-default text-center" id="random-number-selector">' + firstNum + '</div>')
			console.log(this.firstNum);
			this.totalNum=0;
			$("#total-score").html('<div class="panel-body text-center" id="total-score">' + totalNum + '</div>');
			console.log(total-score);
		}
		gamePlay: function() {
			this.reset();
			
		}
}