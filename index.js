window.addEventListener("DOMContentLoaded", main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const cards = document.querySelectorAll(".cardcontainer .card");
    for (const card of cards) {
        card.addEventListener("click", makeCardBigger);
    }
}


function makeCardBigger(event) {
    // Steg 1. Dölj alla korten
    const cards = document.querySelectorAll(".cardcontainer .card");
    for (const card of cards) {
        card.classList.toggle("hidden");
    }

    // Steg 2. Visa aktuellt kort i "stort läge"
    const cardThatWasClickedOn = event.currentTarget;
    cardThatWasClickedOn.classList.toggle("hidden");
    cardThatWasClickedOn.classList.toggle("large");
    const contentwhenbigger = cardThatWasClickedOn.querySelector(".contentwhenbigger")
    contentwhenbigger.classList.toggle("show")

    // knappar för att klicka sig igenom korten 
    const leftbutton = document.querySelector(".left");
    const rightbutton = document.querySelector(".right");

    leftbutton.onclick = () => {
        document.querySelector(".cardcontainer").scrollLeft += 20;
    };

    rightbutton.onclick = () => {
        document.querySelector(".cardcontainer").scrollRight += 20;
    };
}
