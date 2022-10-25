var numberOfButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){  //event listner keep ear on what eventhas happend with the selected thing and do action when a specified action happens
        var buttonInnerHTML=this.innerHTML;

            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
       
    });
}

document.addEventListener("keypress",function(event){ //event tells what sction has happened
    makeSound(event.key);  //event.key will tell the function which key is being pressed
    buttonAnimation(event.key);
});


function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(this.innerHTML);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton= document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){          //used to set the time after which the given function has too be performed agan and again
        activeButton.classList.remove("pressed");
    },100);
}