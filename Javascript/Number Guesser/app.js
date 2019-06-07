/*
GAME RULES AND FUNCTIONS:
Player must guess a number between a minimum and a maximum  
Player only gets a certain amount of guesses
Notify player of guesses remaining
Reveal correct answer if player loses
Let player choose to play again
*/

//place submit button in th center of the page
document.getElementById("button-one").style.marginLeft = "50%";

// Game values
let min = document.getElementsByClassName("min-num") , 
    max = document.getElementsByClassName("max-num"),
    minInput = document.getElementById("minimum"),
    maxInput = document.getElementById("maximum"),
    correctNum = 2,
    guessesLeft = 3;
    console.log(min.textContent);
 //hide guess number text
 document.getElementById("guess").style.display = "none";

 document.getElementById("guess-input").style.display = "none";

 document.getElementById("guess-value").style.display = "none";

//add event listener for game
document.getElementById("button-one").addEventListener("click", addInput);


// create function addInput
function addInput(){

    let minInput = document.createTextNode(document.getElementById("minimum").value),
    maxInput = document.createTextNode(document.getElementById("maximum").value);
    console.log(maxInput.value);
    //pop in new minimum and maximum numbers
    min.appendChild(minInput);
    max.appendChild(maxInput);

    //display guess information
    document.getElementById("guess").style.display = "block";

    document.getElementById("guess-input").style.display = "initial";

    document.getElementById("guess-value").style.display = "initial";
}

console.log(minInput.value);