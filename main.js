window.addEventListener("DOMContentLoaded", main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const cards = document.querySelectorAll(".cardcontainer .card");
    for (const card of cards) {
        card.addEventListener("click", makeCardBigger);
    }
    

    const closeButton = document.getElementById("closecard");
    closeButton.addEventListener("click", makeCardSmaller);
}

function makeCardBigger(event) {
    // const card1 = document.getElementById("card1");
    // // card1.classList.add("open");
    // card1.style.height = "40rem"
    // card1.style.width = "80rem"

    // const moreContent = document.querySelector(".contentwhenbigger")
    // moreContent.style.display = "block"

    // Steg 1. Dölj alla korten
    const cards = document.querySelectorAll(".cardcontainer .card");
    for (const card of cards) {
        card.classList.add("hidden");
    }

    // Steg 2. Visa aktuellt kort i "stort läge"
    const cardThatWasClickedOn = event.currentTarget;
    cardThatWasClickedOn.classList.remove("hidden");
    cardThatWasClickedOn.classList.add("large");
    const contentwhenbigger = cardThatWasClickedOn.querySelector(".contentwhenbigger")
    contentwhenbigger.classList.add("show")
}

function makeCardSmaller() {
    // const card1 = document.getElementById("card1");
    // card1.style.width = "18rem";
    // card1.style.height = "28rem"
    // console.log("hallå");

    const cards = document.querySelectorAll(".cardcontainer .card");
    for (const card of cards) {
        card.classList.remove("large");
    }
}