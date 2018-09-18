// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const sideNav = document.querySelector(".side-nav");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".navigation_item");

// Set Initial State of the Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        // Reset Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        // Reset Menu State
        showMenu = false;
    }
}
