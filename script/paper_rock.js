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

function playRound(user_pick,comp_pick) {       
    if(user_pick == "rock" || user_pick == "paper" || user_pick == "scissors") {

        console.log(`Computer picks: ${comp_pick}`);
        const right = document.querySelector(".right");

        if(comp_pick == "paper") {
            right.setAttribute("src","./img/paper_2.png");
        }
        else if(comp_pick == "rock") {
            right.setAttribute("src","./img/rock_2.png");
        }
        else {
            right.setAttribute("src","./img/scissors_2.png");
        }        

        if(
            user_pick == "rock" && comp_pick == "rock" || 
            user_pick == "paper" && comp_pick == "paper" ||
            user_pick == "scissors" && comp_pick == "scissors"
        ) {
            return "It's a Draw!";
        }
        else if(
            user_pick == "rock" && comp_pick == "scissors" || 
            user_pick == "paper" && comp_pick == "rock" ||
            user_pick == "scissors" && comp_pick == "paper"
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
    let score;   
    
    score = playRound(user_pick,computerPlay());

    if(score == "It's a Draw!") {
        score_user++;
        score_comp++;
    }
    else if(score == "You lose!") {
        score_comp++;
    }
    else if (score == "You won!") {
        score_user++;
    }
    else {
        return;
    }

    count++;

    console.log(score);
    console.log(`Score is: ${score_user}/${score_comp}`);

    disp_user_score.textContent = `${score_user}`;
    disp_comp_score.textContent = `${score_comp}`;    

    if(count == 5) {
        if(score_user > score_comp) {
            disp_final_score.setAttribute("style","color: #3b4279;");
            disp_final_score.textContent = `You have won the game!`;
        }
        else if(score_user == score_comp) {
            disp_final_score.setAttribute("style","color: #ffff;");
            disp_final_score.textContent = `It's a Draw!`;
        }
        else {
            disp_final_score.setAttribute("style","color: #7f3e42;");
            disp_final_score.textContent = `You lose the game!`;
        }   
        score_user = 0;
        score_comp = 0; 
        count = 0;         
    }
    if(count == 1) {
        disp_final_score.textContent = "";   
    }
    
    
    return;      
}

//=================================================
let user_pick; 
const button_paper = document.querySelector(".btn_1");
const button_scissors = document.querySelector(".btn_2");
const button_rock = document.querySelector(".btn_3");
const left = document.querySelector(".left");
let score_user = 0, score_comp = 0; 
let count = 0;
let disp_user_score = document.querySelector(".bot_left");
let disp_comp_score = document.querySelector(".bot_right");
let disp_final_score = document.querySelector(".final_score");


button_paper.addEventListener("click", () => {
    left.setAttribute("src","./img/paper_1.png");
    button_paper.classList.add("clicked");
    user_pick = "paper";
    game();
});

button_scissors.addEventListener("click", () => {
    left.setAttribute("src","./img/scissors_1.png"); 
    button_scissors.classList.add("clicked"); 
    user_pick = "scissors";  
    game();       
});

button_rock.addEventListener("click", () => {
    left.setAttribute("src","./img/rock_1.png");     
    button_rock.classList.add("clicked");   
    user_pick = "rock";
    game();
});

function removeTransition(e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove("clicked");
}

const buttons_pressed = document.querySelectorAll(".btn");
buttons_pressed.forEach(btn => btn.addEventListener("transitionend", removeTransition));