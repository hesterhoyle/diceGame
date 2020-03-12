document.getElementById("game1").disabled = true;
document.getElementById("game2").disabled = true;
document.getElementById("hold1").disabled = true;
document.getElementById("hold2").disabled = true;

let score1 = 0;
let score2 = 0;

function startGame() {
    document.getElementById("game1").disabled = false;
    document.getElementById("hold1").disabled = false;
    document.getElementById("diceImg1").src="images/dicedice.gif";
    document.getElementById("diceImg2").src="images/dicedice.gif";
    document.getElementById("rolled1").innerHTML = " ";
    document.getElementById("rolled2").innerHTML = " ";
    document.getElementById("winLose1").innerHTML = " ";
    document.getElementById("winLose2").innerHTML = " ";
    score1 = 0;
    score2 = 0;
    document.getElementById("score1").innerHTML = " ";
    document.getElementById("score2").innerHTML = " ";
    document.getElementById("game1").innerHTML = "ROLL!";
    document.getElementById("game2").innerHTML = "ROLL!";
    document.getElementById("score1").innerHTML = "0"
    document.getElementById("score2").innerHTML = "0"
}

function holdPass1() {
    document.getElementById("game1").disabled = true;
    document.getElementById("hold1").disabled = true;
    document.getElementById("game2").disabled = false;
    document.getElementById("hold2").disabled = false;
}

function holdPass2() {
    document.getElementById("game2").disabled = true;
    document.getElementById("hold2").disabled = true;
    document.getElementById("game1").disabled = false;
    document.getElementById("hold1").disabled = false;
}

function clickFunc1() {
    dice = Math.ceil(Math.random()*6);
    document.getElementById("winLose2").innerHTML = " ";
    if (dice == 1) {
        document.getElementById("diceImg1").src="images/dice1.png";
        document.getElementById("rolled1").innerHTML = "You rolled a 1!";
        document.getElementById("winLose1").innerHTML = "Try again!";
        document.getElementById("winLose1").style.color = "red";
        document.getElementById("score1").innerHTML = "0"
        score1=0;
        document.getElementById("game1").disabled = true;
        document.getElementById("hold1").disabled = true;
        document.getElementById("game2").disabled = false;
        document.getElementById("hold2").disabled = false;
    } else {
        if (dice == 2) {
            document.getElementById("diceImg1").src="images/dice2.png";
            document.getElementById("rolled1").innerHTML = "You rolled a 2!"
            document.getElementById("game1").innerHTML = "Keep rolling...";
            document.getElementById("winLose1").innerHTML = " ";
            score1 = score1 + 2;
            document.getElementById("score1").innerHTML = `${score1}`
        } else if (dice == 3) {
            document.getElementById("diceImg1").src="images/dice3.png";
            document.getElementById("rolled1").innerHTML = "You rolled a 3!"
            document.getElementById("game1").innerHTML = "Keep rolling...";
            document.getElementById("winLose1").innerHTML = " ";
            score1 = score1 + 3;
            document.getElementById("score1").innerHTML = `${score1}`
        } else if (dice == 4) {
            document.getElementById("diceImg1").src="images/dice4.png";
            document.getElementById("rolled1").innerHTML = "You rolled a 4!"
            document.getElementById("game1").innerHTML = "Keep rolling...";
            document.getElementById("winLose1").innerHTML = " ";
            score1 = score1 + 4;
            document.getElementById("score1").innerHTML = `${score1}`
        } else if (dice == 5) {
            document.getElementById("diceImg1").src="images/dice5.png";
            document.getElementById("rolled1").innerHTML = "You rolled a 5!"
            document.getElementById("game1").innerHTML = "Keep rolling...";
            document.getElementById("winLose1").innerHTML = " ";
            score1 = score1 + 5;
            document.getElementById("score1").innerHTML = `${score1}`
        } else if (dice == 6) {
            document.getElementById("diceImg1").src="images/dice6.png";
            document.getElementById("rolled1").innerHTML = "You rolled a 6!"
            document.getElementById("game1").innerHTML = "Keep rolling...";
            document.getElementById("winLose1").innerHTML = " ";
            score1 = score1 + 6;
            document.getElementById("score1").innerHTML = `${score1}`
        }
    } if (score1 >= 20) {
        document.getElementById("winLose1").innerHTML = "YOU WIN!!!";
        document.getElementById("winLose2").innerHTML = "YOU LOSE!!!";
        document.getElementById("winLose1").style.color = "green";
        document.getElementById("winLose2").style.color = "red";
        score1=0;
        document.getElementById("game1").disabled = true;
        document.getElementById("hold1").disabled = true;
    }
}

function clickFunc2() {
    dice = Math.ceil(Math.random()*6);
    document.getElementById("winLose1").innerHTML = " ";
    if (dice == 1) {
        document.getElementById("diceImg2").src="images/dice1.png";
        document.getElementById("rolled2").innerHTML = "You rolled a 1!";
        document.getElementById("winLose2").innerHTML = "Try again!";
        document.getElementById("winLose2").style.color = "red";
        document.getElementById("score2").innerHTML = "0"
        score2=0;
        document.getElementById("game2").disabled = true;
        document.getElementById("hold2").disabled = true;
        document.getElementById("game1").disabled = false;
        document.getElementById("hold1").disabled = false;
    } else {
        if (dice == 2) {
            document.getElementById("diceImg2").src="images/dice2.png";
            document.getElementById("rolled2").innerHTML = "You rolled a 2!"
            document.getElementById("game2").innerHTML = "Keep rolling...";
            document.getElementById("winLose2").innerHTML = " ";
            score1 = score1 + 2;
            document.getElementById("score2").innerHTML = `${score1}`
        } else if (dice == 3) {
            document.getElementById("diceImg2").src="images/dice3.png";
            document.getElementById("rolled2").innerHTML = "You rolled a 3!"
            document.getElementById("game2").innerHTML = "Keep rolling...";
            document.getElementById("winLose2").innerHTML = " ";
            score1 = score1 + 3;
            document.getElementById("score2").innerHTML = `${score1}`
        } else if (dice == 4) {
            document.getElementById("diceImg2").src="images/dice4.png";
            document.getElementById("rolled2").innerHTML = "You rolled a 4!"
            document.getElementById("game2").innerHTML = "Keep rolling...";
            document.getElementById("winLose2").innerHTML = " ";
            score1 = score1 + 4;
            document.getElementById("score2").innerHTML = `${score1}`
        } else if (dice == 5) {
            document.getElementById("diceImg2").src="images/dice5.png";
            document.getElementById("rolled2").innerHTML = "You rolled a 5!"
            document.getElementById("game2").innerHTML = "Keep rolling...";
            document.getElementById("winLose2").innerHTML = " ";
            score1 = score1 + 5;
            document.getElementById("score2").innerHTML = `${score1}`
        } else if (dice == 6) {
            document.getElementById("diceImg2").src="images/dice6.png";
            document.getElementById("rolled2").innerHTML = "You rolled a 6!"
            document.getElementById("game2").innerHTML = "Keep rolling...";
            document.getElementById("winLose2").innerHTML = " ";
            score1 = score1 + 6;
            document.getElementById("score2").innerHTML = `${score1}`
        }
    } if (score1 >= 20) {
        document.getElementById("winLose2").innerHTML = "YOU WIN!!!";
        document.getElementById("winLose1").innerHTML = "YOU LOSE!!!";
        document.getElementById("winLose2").style.color = "green";
        document.getElementById("winLose1").style.color = "red";
        score1=0;
        document.getElementById("game2").disabled = true;
        document.getElementById("hold2").disabled = true;
    }
}


// function reset() {
//         document.getElementById("diceImg1").src="images/dicedice.gif";
//         document.getElementById("diceImg2").src="images/dicedice.gif";
//         document.getElementById("rolled1").innerHTML = " ";
//         document.getElementById("rolled2").innerHTML = " ";
//         document.getElementById("winLose1").innerHTML = " ";
//         document.getElementById("winLose2").innerHTML = " ";
//         score1 = 0;
//         score2 = 0;
//         document.getElementById("score1").innerHTML = " ";
//         document.getElementById("score2").innerHTML = " ";
//         document.getElementById("game1").innerHTML = "ROLL!";
//         document.getElementById("game2").innerHTML = "ROLL!";
//         document.getElementById("game1").disabled = true;
//         document.getElementById("game2").disabled = true;
//         document.getElementById("hold1").disabled = true;
//         document.getElementById("hold2").disabled = true;
// }