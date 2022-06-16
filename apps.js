let guess; 
let answer = 48;

while (guess != answer) {
    guess = window.prompt("What is my favorite number?"); 
    guess = parseInt(guess)
    if (guess == answer){
        window.alert ("Congratulations!");
    } else {
       window.alert ("Tray Again!")
    }   
} 

