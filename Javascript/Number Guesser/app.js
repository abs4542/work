/*
GAME RULES AND FUNCTIONS:
Player must guess a number between a minimum and a maximum  
Player only gets a certain amount of guesses
Notify player of guesses remaining
Reveal correct answer if player loses
Let player choose to play again
*/

// Game values
let min = document.querySelector(".min-num"), 
    max = document.querySelector(".max-num"),
    minInput = document.getElementById("minimum"),
    maxInput = document.getElementById("maximum"),
    guessBtn = document.querySelector("#guess-btn"),
    guessInput = document.querySelector("#guess-input"),
    message = document.querySelector(".message"),
    correctNum = 2,
    guessesLeft = 3;

 //hide guess number text
 document.getElementById("guess").style.display = "none";

 document.getElementById("guess-input").style.display = "none";

 document.getElementById("guess-btn").style.display = "none";

//add event listener for game
document.getElementById("button-one").addEventListener("click", addInput);


// create function addInput
function addInput(e){

    if(minInput.value > maxInput.value){
        showError("The minimum number must be less than the maximum number!");
    }else if (minInput.value && maxInput.value){
        let minInput = document.getElementById("minimum").value,
        maxInput = document.getElementById("maximum").value;
        //pop in new minimum and maximum numbers
        min.textContent = minInput;
        max.textContent = maxInput;

        //display guess information
        document.getElementById("guess").style.display = "block";

        document.getElementById("guess-input").style.display = "initial";

        document.getElementById("guess-btn").style.display = "initial";

        guessBtn.addEventListener("click", function(e){
            let userGuess = parseInt(guessInput.value);
            //validate user's guess
            if(isNaN(userGuess) || userGuess < minInput || userGuess > maxInput){
                setMessage(`Please enter a number between ${minInput} and ${maxInput}`);
            }
            e.preventDefault();
        });

    }else{
        showError("Please input numbers for both values!");
    }

    e.preventDefault();
}



//create showError function
function showError(error){

     //hide guess number text
    document.getElementById("guess").style.display = "none";

    document.getElementById("guess-input").style.display = "none";

    document.getElementById("guess-btn").style.display = "none";
   
    //create div for alert
    const errorDiv = document.createElement("div");

    //add a class
    errorDiv.className = "alert alert-danger";

    //get elements
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");

    //create a text node and append it to the div
    errorDiv.appendChild(document.createTextNode(error));

    //insert error above the heading
    card.insertBefore(errorDiv, heading);

    //clear error after 2.5 seconds
    setTimeout(clearError, 2500);
}

//create clearError function
function clearError(){
    document.querySelector(".alert").remove();
}

//create setMessage function
function setMessage(msg){
    message.style.color = "red";
    message.textContent = msg;
}