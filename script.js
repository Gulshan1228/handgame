let you = document.querySelector("#you");
let computer = document.querySelector("#computer");
let win = 0
let lose = 0

let choices = document.querySelectorAll(".choice");
let result = document.querySelector(".btn1");
 

//generate computer choice
let genCompChoice = () => {
  let compChoice = Math.floor(Math.random() * 3);
  return compChoice;
};


choices.forEach((choice) => {
  choice.addEventListener("click", () => {

    let ourChoice = choice.id;

    let comp = genCompChoice();

    if (ourChoice == "rock" && comp == 0) {
      result.innerText = "Draw, Computer Choose Rock";
      result.style.backgroundColor="gray"
    } else if (ourChoice == "rock" && comp == 1) {
      result.innerText = "You Lose, Computer Choose Paper";
      result.style.backgroundColor="red"
      lose++
    } else if (ourChoice == "rock" && comp == 2) {
      result.innerText = "You Win, Computer Choose Scissors";
      result.style.backgroundColor="green"
      win++
    }

    else if (ourChoice == "paper" && comp == 0) {
      result.innerHTML = "You Win, Computer Choose Rock";
      result.style.backgroundColor="green"
      win++
    } else if (ourChoice == "paper" && comp == 1) {
      result.innerHTML = "Draw, Computer Choose Paper";
      result.style.backgroundColor="gray"
    } else if (ourChoice == "paper" && comp == 2) {
      result.innerHTML = "You Lose, Computer Choose Scissors";
      result.style.backgroundColor="red"
      lose++
    }

    else if (ourChoice == "scissor" && comp == 0) {
      result.innerHTML = "You Lose, Computer Choose Rock";
      result.style.backgroundColor="red"
      lose++
    } else if (ourChoice == "scissor" && comp == 1) {
      result.innerHTML = "You Win, Computer Choose Paper";
      result.style.backgroundColor="green"
      win++
    } else if (ourChoice == "scissor" && comp == 2) {
      result.innerHTML = "Draw, Computer Choose Scissors";
      result.style.backgroundColor="gray"
    }

    result.style.color="white"
    console.log(ourChoice,comp,result.innerHTML);


    you.innerHTML=win
    computer.innerHTML=lose
    console.log("Win",win ,"& Lose",lose)
  });
});



// Restart button action
let Restart = document.querySelector( ".btn2" );
Restart.addEventListener('click', () =>{
    you.innerHTML=0;
    computer.innerHTML=0;
    result.style.backgroundColor="rgba(255, 128, 0)";
    result.style.color="black";
    result.innerHTML="Choose Your Move"
    
    if(win>lose){
      alert(` Computer has ${lose} Wins and You Have ${win} Wins Thats Great You are overall Winner of this game`)
    } else if(win<lose){
      alert(`You Have ${win} Wins and Computer has ${lose} Wins Better luck next time, Computer is overall Winner of this game`)
    }else{
      alert(`You Have ${win} Wins and Computer has ${lose} Wins Looks like match is Draw , as you both have same no. of wins`)
    }

    win=0
    lose=0
})


