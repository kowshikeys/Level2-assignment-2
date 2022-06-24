
// Author:kowshik
// Project-start-date: 06/06/2022
// Project-end-date: /06/2022







// dark mode js 


let mode = document.querySelector(".toggle");
 mode.addEventListener("click",() =>{
     document.body.classList.remove("green","orange","sandal","blue")
     document.body.classList.toggle("dark")
    
    if (document.body.classList.contains("dark")){
         colortheme.style.display ="none";
         return;
    }
      colortheme.style.display ="flex";
           

 })


//  logout

const btn = document.querySelector("#logOut");

btn.addEventListener("click", function () {
  sessionStorage.clear();
  window.location.href =
    "http://127.0.0.1:5500/kowshik/Public/Html/accountManagment.html?";
});