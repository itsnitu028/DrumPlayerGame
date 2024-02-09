// document.querySelector("btn").addEventListener("click",handleclick);
// function handleclick()    
// {
//     alert("i got clicked");
// }
// let len= document.querySelectorAll(".drum").length;//.drum instead of btn coz
//if we add on btn somewherelese..
//we wont get only the length of drum part..+the add on btn parameters
// for(let i=0;i<len;i++)
// {
// document.querySelectorAll(".drum")[i].addEventListener("click",function(){ //anonymous function
//     this.style.color="white";}
//     );
// }
//we have written querySelectorAll instead of
//querySelector because its syntax ..if we want to target any i
//if we write only querySelector..then it will target only the first occuring ones
/************************************** */
//var audio = new Audio('audio_file.mp3');
// audio.play();
//console.log(this);   console.log(this.innerHTML);
let len=document.querySelectorAll(".drum").length;
//if button is clicked via mouse
for(let i=0;i<len;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        let i_clicked=this.innerHTML;
        makeSound(i_clicked);
        buttonAnimation(i_clicked);

    });
}
//if button is pressed in keyboard
    document.addEventListener("keydown",function(event)
    {
        makeSound(event.key);
        buttonAnimation(event.key);

    });

function makeSound(key)
{
    switch (key) {
        case 'w':
            var audio1 = new Audio('sounds/tom-1.mp3');
             audio1.play();     
            break;
            case 'a':
                var audio2 = new Audio('sounds/tom-2.mp3');
                 audio2.play();     
                break;
            case 's':
                    var audio3 = new Audio('sounds/tom-3.mp3');
                     audio3.play();     
                break;
            case 'd':
                    var audio4 = new Audio('sounds/tom-4.mp3');
                     audio4.play();     
                    break;  
             case 'j':
                var audio = new Audio('sounds/crash.mp3');
                audio.play();     
                        break;
            case 'k':
                var audio = new Audio('sounds/kick-bass.mp3');
                             audio.play();     
                             break;            
            case 'l':
                    var audio = new Audio('sounds/snare.mp3');
                                 audio.play();     
                   break;                                           
        default:
            break;
    }
}

function buttonAnimation(currentkey)
{
   let activeButton=document.querySelector("."+currentkey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
    activeButton.classList.remove("pressed");
   },300)
}

