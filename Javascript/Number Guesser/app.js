/*
GAME RULES AND FUNCTIONS:
Player must guess a number between a minimum and a maximum  
Player only gets a certain amount of guesses
Notify player of guesses remaining
Reveal correct answer if player loses
Let player choose to play again
*/

// Game values
let minInput = document.getElementById("minimum"),
    maxInput = document.getElementById("maximum"),
    numOfGuesses = document.querySelector("#guesses");

//add event listener for game
document.getElementById("button-one").addEventListener("click", addInput);
let min = document.querySelector(".min-num"), 
    max = document.querySelector(".max-num"),
    guessBtn = document.getElementById("guess-btn"),
    guessInput = document.querySelector("#guess-input"),
    message = document.querySelector(".message"),
    correctNum = 2,
    guessesLeft;

 //hide guess number text
 document.getElementById("guess").style.display = "none";

 document.getElementById("guess-input").style.display = "none";

 document.getElementById("guess-btn").style.display = "none";

// check user's input
guessBtn.addEventListener("click", checkInput);

//create function checkInput
function checkInput(e){
    let userGuess = parseInt(guessInput.value);
    //validate user's guess
    if(isNaN(userGuess) || userGuess < minInput || userGuess > maxInput){
        setMessage(`Please enter a number between ${minInput} and ${maxInput}`, "red");
        // setInterval(function(){
        //     message.style.opacity = 0;
        // }, 3000);
         //change border color
        guessInput.style.borderColor =  "red";
        guessInput.style.borderWidth = "thick";
    }

    //check if guess is correct, game over, user won
    else if(userGuess === correctNum){
        guessInput.disabled = true;

        //change border color
        guessInput.style.borderColor =  "green";
        guessInput.style.borderWidth = "thick";

        //set message
        setMessage(`${correctNum} is correct! YOU WIN!!!`, "green");
    }else{
        guessesLeft -= 1;
        console.log(guessesLeft);
        if(guessesLeft === 0){
            //game over, user lost
            guessInput.disabled = true;

            //change border color
            guessInput.style.borderColor =  "red";
            guessInput.style.borderWidth = "thick";
        
            //set message
            setMessage(`Game over. You have no more guesses and have lost. The correct number was ${correctNum}!`, "red");
        }else{
            //game continues, user has more guesses even though the guess was wrong

            
            //change border color
            guessInput.style.borderColor =  "blue";
            guessInput.style.borderWidth = "thick";

            //clear input
            guessInput.value = "";

            setMessage(`${userGuess} is not the correct number. You have ${guessesLeft} guess/guesses left.`, "blue");
        }


    }
        e.preventDefault();
}

// create function addInput
function addInput(e){

    if(!minInput.value || !maxInput.value || !numOfGuesses.value){
        showError("Please input numbers for all values!");
    }else if(parseInt(minInput.value) > parseInt(maxInput.value)){
        showError("The minimum number must be less than the maximum number!");
    }else{
        minInput = minInput.value,
        maxInput = maxInput.value;
        numOfGuesses = numOfGuesses.value;
        guessesLeft = parseInt(numOfGuesses);
        //pop in new minimum and maximum numbers
        min.textContent = minInput;
        max.textContent = maxInput;

        //display guess information
        document.getElementById("guess").style.display = "block";

        document.getElementById("guess-input").style.display = "initial";

        document.getElementById("guess-btn").style.display = "initial";
        document.getElementById("button-one").disabled = true;
        document.getElementById("minimum").disabled = true;
        document.getElementById("maximum").disabled = true;
        document.getElementById("guesses").disabled = true;

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
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}