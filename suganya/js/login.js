const signStore = () => {
  const signName = document.getElementById("signname").value;
  const signEmail = document.getElementById("signemail").value;
  const signPassword = document.getElementById("signpassword").value;

  const signStorage = {
    user: signName,
    email: signEmail,
    password: signPassword,
  };

  console.log("success");
  localStorage.setItem("user", JSON.stringify(signStorage));
  sessionStorage.setItem("user", JSON.stringify(signStorage));
  window.location.href =
    "http://192.168.0.108:5501/suganya/public/HTML/home.html";
};

// const loginStore = () => {
//   const loginEmail = document.getElementById("loginemail").value;
//   const loginPassword = document.getElementById("loginpassword").value;

//   const loginStorage = {
//     email: loginEmail,
//     password: loginPassword,
//   };

//   let localGet = JSON.parse(localStorage.getItem("user"));

//   if (localGet.password !== loginPassword) {
//     alert("password do not match");
//     return;
//   }
//   if (localGet.email !== loginEmail) {
//     alert("email do not match");
//     return;
//   }

//   sessionStorage.setItem("user", JSON.stringify(loginStorage));
//   window.location.href =
//     "http://192.168.0.108:5501/suganya/public/HTML/home.html";
// };
