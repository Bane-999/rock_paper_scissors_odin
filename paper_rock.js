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

function game(x, y) {
    console.log(`Computer picks: ${y}`);
    if(x == "rock") {
        if(y == "rock") {
            console.log("It's a Draw!");
        }
        else if(y == "paper") {
            console.log("You lose!");
        }
        else {
            console.log("You won!");
        }
    }
    else if(x == "paper") {
        if(y == "rock") {
            console.log("You won!");
        }
        else if(y == "paper") {
            console.log("It's a Draw!");
        }
        else {
            console.log("You lose!");
        }
    }
    else {
        if(y == "rock") {
            console.log("You lose!");
        }
        else if(y == "paper") {
            console.log("You won!");
        }
        else {
            console.log("It's a Draw!");
        }
    }
}

let user_pick = prompt("Choose rock, paper or scissors.");
if(user_pick == "rock" || user_pick == "paper" || user_pick == "scissors") {
    game(user_pick, computerPlay());
}
else {
    console.log("Wrong input!");
}

//console.log(computerPlay());
