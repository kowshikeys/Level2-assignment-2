// Author:kowshik
// Project-start-date: 02/06/2022
// Project-end-date: 04/06/2022



const signupadd = () => {
    const signUpName =document.getElementById("nameup").value;
    const signUpEmail =document.getElementById("emailup").value;
    const signUpPassword =document.getElementById("passwordup").value;

    const signUpstorage = {
        user:signUpName,
        email:signUpEmail,
        password:signUpPassword,
    };


    console.log("success");
    localStorage.setItem("user",JSON.stringify(signUpstorage));
    sessionStorage.setItem("user",JSON.stringify(signUpstorage));
    window.location.href = "http://127.0.0.1:5500/kowshik/Public/Html/landing-page.html#";
    
};


const loginadd = () => {
    const loginEmail = document.getElementById("mailin").value;
    const loginPassword = document.getElementById("passwordin").value;

    const loginstorage = {
        email: loginEmail,
        password: loginPassword,
    };

    let localAdd = JSON.parse(localStorage.getItem("user"));

    if(localAdd.email !== loginEmail){
        alert("email incorrect");
        return;
    }
    if(localAdd.password !== loginPassword){
        alert("password incorrect");
        return;
    }

    sessionStorage.setItem("user",JSON.stringify(loginstorage));
    window.location.herf =
    "http://127.0.0.1:5500/kowshik/Public/Html/landing-page.html#";



};





const signInBtn = document.querySelector("#sign-in-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

signUpBtn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

signInBtn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});







