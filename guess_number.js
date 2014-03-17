calc_array = new Array();
var number=Random();
var guess_num = 3;

window.onload = function(){ 
    document.getElementById("num_result").value = "Guess a Number";
    document.getElementById("guesses_left").value = guess_num; 
}

function Random() {
    return Math.floor(Math.random()*25);
}

function $id(id)
{ 
    document.getElementById("guesses_left").value = guess_num;
    return document.getElementById(id);
}
function check_number(id)
{
    if(guess_num > 0){
        guess_num--;
        if(id == number){    
            document.getElementById(id).style.backgroundColor="green";
            console.dir("Found");
            document.getElementById("num_result").value = "Congrats! You guessed the number!";
        }
        if(id > number){    
            document.getElementById(id).style.backgroundColor="red";
            for (var index = id ; index <= 25 ; index++){
                document.getElementById(index).style.backgroundColor="red";
            }
            console.dir("The number is lower");
            document.getElementById("num_result").value = "The number is lower";
        }
    
        if(id < number){    
            document.getElementById(id).style.backgroundColor="red";
            for (var index = id ; index > 0 ; index--){
                document.getElementById(index).style.backgroundColor="red";
            }
            console.dir("The number is higher");
            document.getElementById("num_result").value = "The number is higher";
        }
        if(guess_num > 0) {
            document.getElementById("guesses_left").value = guess_num;
        } else {
            document.getElementById("guesses_left").value = guess_num;
            document.getElementById("num_result").value = "No more guesses allowed...";
        }
    }
}
