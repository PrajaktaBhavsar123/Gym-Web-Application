const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

menuIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
});


const menu_Icon = document.querySelector(".menu-icon-two");
const close_Icon = document.querySelector(".close-icon-two");
const smallMenuContainer = document.querySelector(".small-menu-container");

menu_Icon.addEventListener("click", () => {
    smallMenuContainer.classList.add("active");
});

close_Icon.addEventListener("click", () => {
    smallMenuContainer.classList.remove("active");
});
