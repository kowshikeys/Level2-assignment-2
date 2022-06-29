//sign in through session storage
const signIn = () => {
  const emailSignIn = document.getElementById("username").value;
  const passwordSignIn = document.getElementById("password").value;

  const storageSignIn = {
    email: emailSignIn,
    password: passwordSignIn,
  };

  let localGet = JSON.parse(localStorage.getItem("user"));

  if (localGet.email !== emailSignIn) {
    alert("email do not match.");
    return;
  }
  if (localGet.password !== passwordSignIn) {
    alert("Passwords do not match.");
    return;
  }

  console.log("success");
  sessionStorage.setItem("user", JSON.stringify(storageSignIn));
  window.location.href = "http://127.0.0.1:5500/public/html/home.html";
};

//sign up through local storage

const signUp = () => {
  const emailSignUp = document.getElementById("Email").value;
  const passwordSignUp = document.getElementById("Password").value;
  const nameSignUp = document.getElementById("Username").value;

  const storageSignUp = {
    name: nameSignUp,
    email: emailSignUp,
    password: passwordSignUp,
  };

  if (nameSignUp === "") {
    alert("please enter your name");
    return;
  }
  if (emailSignUp === "") {
    alert("please fill your email");
    return;
  }

  if (passwordSignUp === "") {
    alert("please fill a valid password");
    return;
  }
  localStorage.setItem("user", JSON.stringify(storageSignUp));
  sessionStorage.setItem("user", JSON.stringify(storageSignUp));
  window.location.href = "http://127.0.0.1:5500/public/HTML/home.html";
};

//signin signup slide changer
const signInBtn = document.querySelector("#sign-in-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

signUpBtn.addEventListener("click", function () {
  container.classList.add("sign-up-mode");
});
signInBtn.addEventListener("click", function () {
  container.classList.remove("sign-up-mode");
});
