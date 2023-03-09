let numbersContainer = document.querySelector(".rating-state__numbers-box");
let ratingNumber = document.querySelector(".thank-you-state__rating-number");
let submitBtn = document.querySelector(".rating-state__buttom-submit");
let ratingCard = document.querySelector(".rating-state");
let thanksCard = document.querySelector(".thank-you-state");


numbersContainer.addEventListener("click", event=> {
    console.log(event.target.innerText);
    let numberSelected = event.target.innerText;
    ratingNumber.innerText = numberSelected;

    if(numberSelected>0 || numberSelected<=5) {
        submitBtn.addEventListener("click", ()=> {
            console.log("Me gusta tu sapito adela"); // test text if work the button
            ratingCard.style.display = "none";
            thanksCard.style.display = "flex";
        });
    }

});
