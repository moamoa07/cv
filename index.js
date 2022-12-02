window.addEventListener("DOMContentLoaded", main);

/**
 * Function that loads when the sites is loaded
 */
function main() {
    addEventListeners();
    setupBurgerMenu();
}

/**
 * Function that adds eventlisteners to the page, on buttons and elements
 */
function addEventListeners() {
    const cards = document.querySelectorAll(".cardcontainer .card");
    for (const card of cards) {
        card.addEventListener("click", makeCardBigger);
    }

    // knappar för att klicka sig igenom korten 
    const leftbutton = document.querySelector(".left");
    const rightbutton = document.querySelector(".right");

    leftbutton.onclick = () => {
        console.log('LEFT');
        document.querySelector(".cardcontainer").scrollLeft -= window.innerWidth * 0.2;
    };

    rightbutton.onclick = () => {
        console.log('RIGHT');
        document.querySelector(".cardcontainer").scrollLeft += window.innerWidth * 0.2;
    };
}

/**
 * Function that makes every card bigger when clicked on, hides the cards that wasn't clicked on.
 * @param {*} event 
 */
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
}
