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

function playRound(y) {
    let user_pick = prompt("Choose rock, paper or scissors.");
    user_pick = user_pick.toLowerCase();
    if(user_pick == "rock" || user_pick == "paper" || user_pick == "scissors") {

        console.log(`Computer picks: ${y}`);
        if(user_pick == "rock") {
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
        else if(user_pick == "paper") {
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
    else {
        console.log("Wrong input!");
    }  
}

function game() {
    let score_user=0, score_comp=0;
    let score;
    for(let i=0; i<5; i++) {
        score = playRound(computerPlay());
        if(score == "It's a Draw!") {
            score_user++;
            score_comp++;
        }
        else if(score == "You lose!") {
            score_comp++;
        }
        else {
            score_user++;
        }
        console.log(score);
    }
    if(score_user > score_comp) {
        console.log(`Congratulations. You have won the game! Final score is: ${score_user}/${score_comp}`);
    }
    else if(score_user == score_comp) {
        console.log(`It's a Draw! Final score is: ${score_user}/${score_comp}`);
    }
    else {
        console.log(`You lose the game! Final score is: ${score_user}/${score_comp}`);
    }
}

game();