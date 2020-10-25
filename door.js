let door1 = document.getElementById("door1");
let door2 = document.getElementById("door2");
let door3 = document.getElementById("door3");
let startButton = document.getElementById("start");

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let numClosedDoors = 3;

let openDoor1;
let openDoor2;
let openDoor3;

let isPlaying = true;

let score = 0;
let highScore = 0;

let sco = document.getElementById("score");
let hiSco = document.getElementById("high-score");

sco.innerHTML = score;
hiSco.innerHTML = highScore;




//check if the player cklicked on the door befor.
const isClicked = (door) => {
    if(door.src == closedDoorPath) {
        return false
    } else {
        return true
    }
}

//check if the door is a boot.
const isBot = (door) => {
    if(door.src === botDoorPath ) {
        return true
    }
    else {
        return false
    }
}

//check if the player win.
const playDoor = (door) => {
    numClosedDoors--;
    if(numClosedDoors === 0) {
        gameOver("Win");
    } else if(isBot(door)) {
        gameOver("Lose");
    }
}

//generate the doors randomly.
const randomChoreDoorGenerator = () => {
    choreDoor = Math.floor(Math.random() * numClosedDoors);
    if(choreDoor === 0 ) {
        openDoor1 = beachDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;
    } else if(choreDoor === 1 ) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        openDoor1 = spaceDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = botDoorPath;
    }
}

//click the doors.
door1.onclick = () => {
    if(isPlaying && !isClicked(door1)) {
        door1.src = openDoor1;
        playDoor(door1)
    }
}
door2.onclick = () => {
    if(isPlaying && !isClicked(door2)) {
        door2.src = openDoor2;
        playDoor(door2);
    }
}
door3.onclick = () => {
    if(isPlaying && !isClicked(door3)) {
        door3.src = openDoor3;
        playDoor(door3);
    }
}


//start button.
startButton.onclick = () => {
    startRound()
}

const startRound = () => {
    //Reset all the doors the be closed.
    door1.src = closedDoorPath;
    door2.src = closedDoorPath;
    door3.src = closedDoorPath;
    numClosedDoors = 3;
    isPlaying = true;
    startButton.innerHTML = "Good Luck!";
    randomChoreDoorGenerator();
}

//if the player finish.
const gameOver = (str) => {
    if(str === "Win") {
        startButton.innerHTML = "You win! Play again?";
        getYourScore();
    } else {
        startButton.innerHTML = "Game over! Play again?"
        score = 0;
        sco.innerHTML = score;
    }
    isPlaying = false;
}

const getYourScore = () => {
    score++;
    sco.innerHTML = score;
    if(score > highScore) {
        highScore = score;
        hiSco.innerHTML = highScore;
    }
}


startRound();

