window.addEventListener("DOMContentLoaded", main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const card1 = document.getElementById("card1");
    card1.addEventListener("click", makeCardBigger, makeCardSmaller);

    const closeButton = document.getElementById("closecard");
    closeButton.addEventListener("click", makeCardSmaller);
}

function makeCardBigger() {
    const card1 = document.getElementById("card1");
    card1.style.height = "40rem"
    card1.style.width = "80rem"

    const moreContent = document.querySelector(".contentwhenbigger")
    moreContent.style.display = "block"

    const card2 = document.getElementById("card2");
    if (card2.style.display === "none") {
        card2.style.display = null;
    }
    else {
        card2.style.display = "none";
    }
    const card3 = document.getElementById("card3");
    if (card3.style.display === "none") {
        card3.style.display = null;
    }
    else {
        card3.style.display = "none";
    }
    const card4 = document.getElementById("card4");
    if (card4.style.display === "none") {
        card4.style.display = null;
    }
    else {
        card4.style.display = "none";
    }

}

function makeCardSmaller() {
    const card1 = document.getElementById("card1");
    card1.style.width = "18rem";
    card1.style.height = "28rem"
    console.log("hallå");
}