
// Author:kowshik
// Project-start-date: 06/06/2022
// Project-end-date: /06/2022







// dark mode js 


let mode = document.querySelector(".dark-mode");
 mode.addEventListener("click",() =>{
     
     document.body.classList.toggle("dark")
  
 })


//  logout

const btn = document.querySelector(".logout");

btn.addEventListener("click", function () {
  sessionStorage.clear();
  window.location.href =
    "http://127.0.0.1:5500/kowshik/Public/Html/accountManagment.html?";
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



