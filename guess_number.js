calc_array = new Array();
var max = 25;
var guess_num = 3;
var number=Random();

window.onload = function(){ 
    document.getElementById("num_result").value = "Guess a Number";
    document.getElementById("guesses_left").value = guess_num; 
}

function Random() {
    return Math.floor(Math.random()*max);
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
        if(id > number){    
            document.getElementById(id).style.backgroundColor="red";
            for (var index = id ; index <= max ; index++){
                document.getElementById(index).style.backgroundColor="red";
                document.getElementById(index).disabled = true; 
            }
            console.dir("The number is lower");
            document.getElementById("num_result").value = "The number is lower";
        }
    
        if(id < number){    
            document.getElementById(id).style.backgroundColor="red";
            for (var index = id ; index > 0 ; index--){
                document.getElementById(index).style.backgroundColor="red";
                document.getElementById(index).disabled = true; 
            }
            console.dir("The number is higher");
            document.getElementById("num_result").value = "The number is higher";
        }
        if(guess_num > 0) {
            document.getElementById("guesses_left").value = guess_num;
        } 
        if(guess_num == 0) {
            document.getElementById("guesses_left").value = guess_num;
            document.getElementById("num_result").value = "No more guesses allowed...";
            for (var index = max ; index > 0 ; index--){
                document.getElementById(index).disabled = true; 
            }
        }
        if(id == number){    
            document.getElementById(id).style.backgroundColor="green";
            console.dir("Found");
            document.getElementById("num_result").value = "Congrats! You guessed the number!";
            for (var index = max ; index > 0 ; index--){
                document.getElementById(index).disabled = true; 
            }
        }
    }
}

function reset_game()
{
    window.location.reload();
}
