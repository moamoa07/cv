window.addEventListener("DOMContentLoaded", main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    

    // hamburger menu
    const hamburger = document.getElementById("burger");
    const navMenu = document.getElementById("navmenu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener(("click"), () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

}





