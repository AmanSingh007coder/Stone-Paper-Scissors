let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".but");
let msg = document.querySelector(".msgcontainer");
let usermarks = document.querySelector("#user-score");
let compmarks = document.querySelector("#comp-score");

const gencompchoice = ()=>{
    const options = ["rock","paper","scissors"];
   const randindex= Math.floor(Math.random() * 3);
   return options[randindex];
};

const drawmatch = ()=>{
       msg.innerText ="GAME DRAW.PLAY AGAIN!";
       msg.style.backgroundColor = "pink";
};

const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        usermarks.innerText = userscore;
        msg.innerText = `YOU WIN!,Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compmarks.innerText = compscore;
        msg.innerText =`YOU LOSE!,${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
        const compchoice = gencompchoice();
        if(userchoice === compchoice)
        {
            drawmatch();
        }
        else
        {
             let userwin = true;
            if(userchoice === "paper"){
                userwin = compchoice === "rock"? true:false;
            }
            else if(userchoice === "scissors"){
                userwin = compchoice === "paper"? true:false;
            }
            else{
               userwin = compchoice === "scissors"? true:false;
            }
            showwinner(userwin,userchoice,compchoice);
        }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});