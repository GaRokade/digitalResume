let userScore=0
let computerScore=0
let user=document.querySelector("#user-score")
let computer=document.querySelector("#comp-score")
let choices=document.querySelectorAll(".choice")

let msg=document.querySelector("#msg")
const Drawcase=(compChoice,userChoice)=>{
    if(compChoice===userChoice){
        console.log("It draw:", "play again")
    }
    else{
        playGame()
    }
}
 
const Draw=()=>{
    console.log("It draw : Play again")
    msg.innerText="It's a draw! Play again"
    msg.style.backgroundColor=""
}

const getCompChoice=()=>{
    const attri=["rock","paper","scissors"]
    const compChoice=Math.floor(Math.random(attri)*3)
    
   return attri[compChoice]

   
}



const playGame=(userChoice)=>{
    console.log("user Choice is", userChoice)
    let compChoice =getCompChoice()
    console.log("Computer choice is",compChoice)

    if(userChoice===compChoice){
        Draw()
    }
    else{
       let userWin=true
       if(userChoice==="rock"){
         userWin= compChoice==='paper'? false :true

    }
    else if(userChoice==="scissors"){
       userWin= compChoice==="rock"? false :true
    }
    else{
        userWin= compChoice==="scissors"? false :true
    }

    if(userWin){
        console.log(`You win ,${userChoice} beats ${compChoice}`)
        msg.innerText=`You win! ${userChoice} beats ${compChoice} `
        msg.style.backgroundColor="green"
        userScore++
        user.innerText=userScore
    }

    else{
        console.log(`You lose ,${compChoice} beats ${userChoice}`)
        msg.innerText=`You lose! ${compChoice} beats ${userChoice} `
        msg.style.backgroundColor="red"
        computerScore++
        computer.innerText=computerScore
    }
   
}
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
    
     playGame(userChoice)
    })

})