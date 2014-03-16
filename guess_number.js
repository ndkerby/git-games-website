calc_array = new Array();
var number=Random();

function Random() {

return Math.floor(Math.random()*25);
}

function $id(id)
{
        return document.getElementById(id);
}
function check_number(id)
{
    if(id == number){    
        document.getElementById(id).style.backgroundColor="green";
        console.dir("Found");
    }
    if(id > number){    
        document.getElementById(id).style.backgroundColor="red";
        for (var index = id ; index <= 25 ; index++){
            document.getElementById(index).style.backgroundColor="red";
        }
        console.dir("The number is lower");
    }
    
    if(id < number){    
        document.getElementById(id).style.backgroundColor="red";
        for (var index = id ; index > 0 ; index--){
            document.getElementById(index).style.backgroundColor="red";
        }
        console.dir("The number is higher");
    }
}

console.dir("Hello World");
//console.dir(number);