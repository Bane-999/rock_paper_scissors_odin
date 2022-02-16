function computerPlay() {
    let comp_pick;
    let random = Math.floor(Math.random()*3)+1;
    switch(random) {
        case 1:
            comp_pick = "paper";
            break;
        case 2:
            comp_pick = "scissors";
            break;
        case 3:
            comp_pick = "rock";
            break;  
        default:
            console.log("Something went wrong...");
    }
    return comp_pick;
}

function playRound(x, y) {
    console.log(`Computer picks: ${y}`);
    if(x == "rock") {
        if(y == "rock") {
            return "It's a Draw!";
        }
        else if(y == "paper") {
            return "You lose!";
        }
        else {
            return "You won!";
        }
    }
    else if(x == "paper") {
        if(y == "rock") {
            return "You won!";
        }
        else if(y == "paper") {
            return "It's a Draw!";
        }
        else {
            return "You lose!";
        }
    }
    else {
        if(y == "rock") {
            return "You lose!";
        }
        else if(y == "paper") {
            return "You won!";
        }
        else {
            return "It's a Draw!";
        }
    }
}

let user_pick = prompt("Choose rock, paper or scissors.");
user_pick = user_pick.toLowerCase();
if(user_pick == "rock" || user_pick == "paper" || user_pick == "scissors") {
    console.log(playRound(user_pick, computerPlay()));
}
else {
    console.log("Wrong input!");
}

//console.log(computerPlay());
