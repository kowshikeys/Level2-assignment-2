const btn = document.querySelector("#logOut");

btn.addEventListener("click", function () {
  sessionStorage.clear();
  window.location.href =
    "http://192.168.0.108:5501/suganya/public/HTML/login.html";
});
window.onload = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (!user) {
    window.location.href =
      "http://192.168.0.108:5501/suganya/public/HTML/login.html";
  }
};
