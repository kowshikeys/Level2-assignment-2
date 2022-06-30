
// Author:kowshik
// Project-start-date: 07/06/2022
// Project-end-date: 26/06/2022







// dark mode js 


let mode = document.querySelector(".dark-mode");
mode.addEventListener("click", () => {

  document.body.classList.remove("orange", "green", "sandal")

  document.body.classList.toggle("dark")

  if (document.body.classList.contains("dark")) {
    colortheme.style.display = "none"
    return;
  }
  colortheme.style.display = "flex"


})

//  blue color theme code 

let blue = document.querySelector(".blue");
blue.addEventListener("click", () => {
  document.body.classList.remove("green", "sandal", "orange")
  document.body.classList.toggle("blue")
})




//  orange color theme code 

let orange = document.querySelector(".orange");
orange.addEventListener("click", () => {
  document.body.classList.remove("green", "sandal", "blue")
  document.body.classList.toggle("orange")
})

//  green color theme code 

let green = document.querySelector(".green");
green.addEventListener("click", () => {
  document.body.classList.remove("blue", "sandal", "orange")
  document.body.classList.toggle("green")
})

//  sandal color theme code 

let sandal = document.querySelector(".sandal");
sandal.addEventListener("click", () => {
  document.body.classList.remove("blue", "green", "orange")
  document.body.classList.toggle("sandal")
})



// to target the button to show actived color

let buttons = document.querySelectorAll(".btn");

for (var button of buttons) {
  button.addEventListener("click", (e) => {
    let target = e.target;

    // automatically close when trageted color is choosen

    let open = document.querySelector(".open");
    if (open) open.classList.remove("open");

    document.querySelector(".active").classList.remove("active");
    target.classList.add("active");

  });
}



//  logout

const btn = document.querySelector(".logout");

btn.addEventListener("click", function () {
  sessionStorage.clear();
  window.location.href =
    "http://127.0.0.1:5500/kowshik/Public/Html/accountManagment.html?";
});

// //  open and close the theme box 

let colortheme = document.querySelector(".color-theme");
let coloricon = document.querySelector(".color-icons");

coloricon.addEventListener("click", () => {
  colortheme.classList.toggle("open");
});


const menubtn = document.querySelector(".buttonX");
const bar = document.querySelector(".hamburger");
const sidebars = document.querySelector(".sec-topbar");

function openMenu() {
  sidebars.style.display = "flex";
}

function closeMenu() {
  sidebars.style.display = "none";
}



