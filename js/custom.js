function Popup() {
    let popupForm = document.querySelector('.popup__form');
    popupForm.classList.toggle("popup__active");
}

function removePopup() {
    let popupForm = document.querySelector('.popup__form');
    popupForm.classList.toggle("popup__active");
}

function removeMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}



let menuBtn = document.querySelector(".menu__btn");
let menu = document.querySelector(".menu");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("active");
})