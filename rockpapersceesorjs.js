let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");

userScore = 0;
compScore = 0;

let scoreofUser =document.querySelector("#User-no");
let scoreofComp =document.querySelector("#comp-no");

const generatedchoies =()=>
{
    const choiceList =["rock","paper","scissor"];
    const value = Math.floor(Math.random()*3);
    return choiceList[value];
}

const gameDraw = () => {
    console.log("Game is draw");
    msg.innerText ="Game is draw . Please try again";
    msg.style.backgroundColor = "#081b31";
    msg.style.color = "#fff";
}

const showWinner = (userwin,userChoice,compChoice)=>{
  if(userwin){
    console.log("You win");
    userScore++;
    scoreofUser.innerText = userScore;

    msg.innerText ="You Win!";
    msg.style.backgroundColor = "green";
  }else{
    console.log("You Loss");
    compScore++;
    scoreofComp.innerText = compScore;

    msg.innerText ="You lose!";
    msg.style.backgroundColor = "red";
  }
}

const game = (userChoice)=>{
    console.log("userchoice =",userChoice);
    const compChoice = generatedchoies();
    console.log("compchoice =",compChoice);
    
    if(userChoice==compChoice){
      gameDraw();
    }else{
        let userwin = true;
        if(userChoice = "rock"){  
          //paper,scissor
           userwin=compChoice === "paper"?false : true;  
    }else if(userChoice==="paper"){
        //stone, scissor
        userwin = compChoice === "scissor" ? false : true;
    }else{ //scissor
        //rock ,paper
        userwin=compChoice === "rock" ? false : true;
    }
    showWinner(userwin,userChoice,compChoice);
 }
};

choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        game(userChoice);
    })
})