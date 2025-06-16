let button = document.querySelector("button");

button.addEventListener("click", function() {
    let textElem = document.querySelector(".text");
    let numberElem = document.querySelector(".number");
    let emailElem = document.querySelector(".email");;
    let dateElem = document.querySelector(".date");;
    
    // 1. Update the four variables - text, number, email, and date.
    //  - Save the value of the four different inputs.
    //  - Go to the html to use the class names.
    let text = textElem.value;
    let number = numberElem.value;
    let email = emailElem.value;
    let date = dateElem.value;
    


    // DO NOT CHANGE THIS CODE
    let resultsDiv = document.querySelector('#results');
    resultsDiv.innerHTML = "";
    resultsDiv.innerHTML += `<p>Text: ${text}</p>`;
    resultsDiv.innerHTML += `<p>Number: ${number}</p>`;
    resultsDiv.innerHTML += `<p>Email: ${email}</p>`;
    resultsDiv.innerHTML += `<p>Date: ${date}</p>`;

})