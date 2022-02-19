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
        if(
            user_pick == "rock" && y == "rock" || 
            user_pick == "paper" && y == "paper" ||
            user_pick == "scissors" && y == "scissors"
        ) {
            return "It's a Draw!";
        }
        else if(
            user_pick == "rock" && y == "scissors" || 
            user_pick == "paper" && y == "rock" ||
            user_pick == "scissors" && y == "paper"
        ) {
            return "You won!";
        }
        else {
            return "You lose!";
        }        
    }  
    
    else {
        console.log("Wrong input!");
    }  
}

function game() {
    let score_user=0, score_comp=0;
    let disp_user_score = document.query
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
        console.log(`Score is: ${score_user}/${score_comp}`);
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

//game();