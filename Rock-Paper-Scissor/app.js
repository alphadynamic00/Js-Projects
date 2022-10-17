let wins=document.getElementById('wins');
let loses=document.getElementById('loses');
let loss=0,win=0;
let userChoiceDisplay=document.getElementById('user-choice');
let computerChoiceDisplay=document.getElementById('computer-choice');
let userChoice;
let computerChoice;

let computerChoiceGenerator = () =>{
    let option=Math.floor(Math.random()*3);
    if(option===1) computerChoice='rock.jpg';
    else if(option===2) computerChoice='paper.jpg';
    else computerChoice='scissor.jpg';
}

let whoWins = () =>{
    if(userChoice===computerChoice){
        win++;loss++;
    }
    if(userChoice==='paper.jpg'){
        if(computerChoice==='rock.jpg') win++;
        else if(computerChoice==='scissor.jpg') loss++;
    }
    else if(userChoice==='rock.jpg'){
        if(computerChoice==='scissor.jpg') win++;
        else if(computerChoice==='paper.jpg') loss++;
    }
    else{
        if(computerChoice==='rock.jpg') loss++;
        else if(computerChoice==='paper.jpg') win++;
    }
}

let buttons=document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click',(e)=>{
    userChoice=`${e.target.id}.jpg`;
    userChoiceDisplay.innerHTML=`<img src=${userChoice}>`;
    computerChoiceGenerator();
    computerChoiceDisplay.innerHTML=`<img src=${computerChoice}>`;
    whoWins();
    wins.innerHTML=win;
    loses.innerHTML=loss;
}));