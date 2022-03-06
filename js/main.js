// function myFunction() {
//     let x = document.querySelector("#myTopnav")

//     if (x.Class === topnav) {
//         x.className += " responsive"
//     } else {
//         x.className = "topnav"
//     }
// }

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("active");
})