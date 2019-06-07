// Listen for submit calculate button

document.querySelector("#loan-form").addEventListener("submit", function(e){
    //hide results 

    document.getElementById("results").style.display = "none";

    //show loader

    document.getElementById("loader").style.display = "block";

    setTimeout(calculateResults, 3000);

    e.preventDefault();
});

//define function calculateResults
function calculateResults(){
    //UI variables needed
    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const monthlyPayments = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //Compute monthly payments needed
    const equation = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthlyPay = (principal * equation * calculatedInterest)/(equation - 1);

    if(isFinite(monthlyPay)){
        monthlyPayments.value = monthlyPay.toFixed(2);
        totalPayment.value = (monthlyPay * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthlyPay * calculatedPayments) - principal).toFixed(2);

        //show results and hide loader
        document.getElementById("results").style.display = "block";
        document.getElementById("loader").style.display = "none";
    } else {
        showError("Please check your numbers!");
    }
}

//create showError function
function showError(error){
    //hide loader and results
    document.getElementById("results").style.display = "none";
    document.getElementById("loader").style.display = "none";
    
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