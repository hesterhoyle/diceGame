let score = 0;

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

function reset() {
    document.getElementById("diceImg").src="images/dicedice.gif";
    document.getElementById("rolled").innerHTML = " "
    document.getElementById("button").innerHTML = "START!";
    button.style.backgroundColor = "peru"
    document.getElementById("winLose").innerHTML = " ";
    score = 0;
    document.getElementById("score").innerHTML = " ";
}
