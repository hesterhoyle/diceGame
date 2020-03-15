//Hester Hoyle

//Divs show/hide - start with game divs hidden, click to reveal difficulty
document.getElementById("game").style.display = "none"
document.getElementById("gameHard").style.display = "none"

function selectNorm() {
    document.getElementById("start").style.display = "none";
    document.getElementById("game").style.display = "block";
}

function selectHard() {
    document.getElementById("start").style.display = "none";
    document.getElementById("gameHard").style.display = "block";
}

//Score default 0
let score = 0;

//Dice game function normal mode for 20 points
function clickFunc() {
    dice = Math.ceil(Math.random()*6);
    if (dice == 1) {
        document.getElementById("diceImg").src="images/dice1.png";
        document.getElementById("rolled").innerHTML = "You rolled a 1!";
        document.getElementById("button").innerHTML = "Start Again";
        button.style.backgroundColor = "peru"
        document.getElementById("winLose").innerHTML = "YOU LOSE!";
        document.getElementById("winLose").style.color = "red"
        score=0
    } else {
        if (dice == 2) {
            document.getElementById("diceImg").src="images/dice2.png";
            document.getElementById("rolled").innerHTML = "You rolled a 2!"
            document.getElementById("button").innerHTML = "Keep rolling...";
            button.style.backgroundColor = "green"
            document.getElementById("winLose").innerHTML = " ";
            score = score + 2;
            document.getElementById("score").innerHTML = `Score: ${score}`
        } else if (dice == 3) {
            document.getElementById("diceImg").src="images/dice3.png";
            document.getElementById("rolled").innerHTML = "You rolled a 3!"
            document.getElementById("button").innerHTML = "Keep rolling...";
            button.style.backgroundColor = "green"
            document.getElementById("winLose").innerHTML = " ";
            score = score + 3;
            document.getElementById("score").innerHTML = `Score: ${score}`
        } else if (dice == 4) {
            document.getElementById("diceImg").src="images/dice4.png";
            document.getElementById("rolled").innerHTML = "You rolled a 4!"
            document.getElementById("button").innerHTML = "Keep rolling...";
            button.style.backgroundColor = "green"
            document.getElementById("winLose").innerHTML = " ";
            score = score + 4;
            document.getElementById("score").innerHTML = `Score: ${score}`
        } else if (dice == 5) {
            document.getElementById("diceImg").src="images/dice5.png";
            document.getElementById("rolled").innerHTML = "You rolled a 5!"
            document.getElementById("button").innerHTML = "Keep rolling...";
            button.style.backgroundColor = "green"
            document.getElementById("winLose").innerHTML = " ";
            score = score + 5;
            document.getElementById("score").innerHTML = `Score: ${score}`
        } else if (dice == 6) {
            document.getElementById("diceImg").src="images/dice6.png";
            document.getElementById("rolled").innerHTML = "You rolled a 6!"
            document.getElementById("button").innerHTML = "Keep rolling...";
            button.style.backgroundColor = "green"
            document.getElementById("winLose").innerHTML = " ";
            score = score + 6;
            document.getElementById("score").innerHTML = `Score: ${score}`
        }
    } if (score >= 20) {
        document.getElementById("button").innerHTML = "Start Again";
        button.style.backgroundColor = "peru"
        document.getElementById("winLose").innerHTML = "YOU WIN!!!";
        document.getElementById("winLose").style.color = "green"
        score=0
    }
}

//Dice game harder difficulty for 30 points
function clickFuncHard() {
    dice = Math.ceil(Math.random()*6);
    if (dice == 1) {
        document.getElementById("diceImgHard").src="images/dice1.png";
        document.getElementById("rolledHard").innerHTML = "You rolled a 1!";
        document.getElementById("buttonHard").innerHTML = "Start Again";
        document.getElementById("buttonHard").style.backgroundColor = "maroon"
        document.getElementById("winLoseHard").innerHTML = "YOU LOSE!";
        document.getElementById("winLoseHard").style.color = "red"
        score=0
    } else {
        if (dice == 2) {
            document.getElementById("diceImgHard").src="images/dice2.png";
            document.getElementById("rolledHard").innerHTML = "You rolled a 2!"
            document.getElementById("buttonHard").innerHTML = "Keep rolling...";
            document.getElementById("buttonHard").style.backgroundColor = "green"
            document.getElementById("winLoseHard").innerHTML = " ";
            score = score + 2;
            document.getElementById("score").innerHTML = `Score: ${score}`
        } else if (dice == 3) {
            document.getElementById("diceImgHard").src="images/dice3.png";
            document.getElementById("rolledHard").innerHTML = "You rolled a 3!"
            document.getElementById("buttonHard").innerHTML = "Keep rolling...";
            document.getElementById("buttonHard").style.backgroundColor = "green"
            document.getElementById("winLoseHard").innerHTML = " ";
            score = score + 3;
            document.getElementById("scoreHard").innerHTML = `Score: ${score}`
        } else if (dice == 4) {
            document.getElementById("diceImgHard").src="images/dice4.png";
            document.getElementById("rolledHard").innerHTML = "You rolled a 4!"
            document.getElementById("buttonHard").innerHTML = "Keep rolling...";
            document.getElementById("buttonHard").style.backgroundColor = "green"
            document.getElementById("winLoseHard").innerHTML = " ";
            score = score + 4;
            document.getElementById("scoreHard").innerHTML = `Score: ${score}`
        } else if (dice == 5) {
            document.getElementById("diceImgHard").src="images/dice5.png";
            document.getElementById("rolledHard").innerHTML = "You rolled a 5!"
            document.getElementById("buttonHard").innerHTML = "Keep rolling...";
            document.getElementById("buttonHard").style.backgroundColor = "green"
            document.getElementById("winLoseHard").innerHTML = " ";
            score = score + 5;
            document.getElementById("scoreHard").innerHTML = `Score: ${score}`
        } else if (dice == 6) {
            document.getElementById("diceImgHard").src="images/dice6.png";
            document.getElementById("rolledHard").innerHTML = "You rolled a 6!"
            document.getElementById("buttonHard").innerHTML = "Keep rolling...";
            document.getElementById("buttonHard").style.backgroundColor = "green"
            document.getElementById("winLoseHard").innerHTML = " ";
            score = score + 6;
            document.getElementById("scoreHard").innerHTML = `Score: ${score}`
        }
    } if (score >= 30) {
        document.getElementById("buttonHard").innerHTML = "Start Again";
        document.getElementById("buttonHard").style.backgroundColor = "maroon"
        document.getElementById("winLoseHard").innerHTML = "YOU WIN!!!";
        document.getElementById("winLoseHard").style.color = "green"
        score=0
    }
}

//reset function
function reset() {
    document.getElementById("start").style.display = "block";
    document.getElementById("game").style.display = "none"
    document.getElementById("gameHard").style.display = "none"
    score=0
    document.getElementById("diceImgHard").src="images/dicedice.gif";
    document.getElementById("rolledHard").innerHTML = " "
    document.getElementById("buttonHard").innerHTML = "START!";
    document.getElementById("buttonHard").style.backgroundColor = "maroon"
    document.getElementById("winLoseHard").innerHTML = " ";
    document.getElementById("scoreHard").innerHTML = " ";
    document.getElementById("diceImg").src="images/dicedice.gif";
    document.getElementById("rolled").innerHTML = " "
    document.getElementById("button").innerHTML = "START";
    button.style.backgroundColor = "peru";
    document.getElementById("winLose").innerHTML = " ";
    document.getElementById("score").innerHTML = " ";
}
