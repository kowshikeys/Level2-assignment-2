const button = document.querySelector("#button");

button.addEventListener("click", function () {
  sessionStorage.clear();
  window.location.href = "http://127.0.0.1:5500/subaa/Public/HTML/login.html";
});

window.onload = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (!user) {
    window.location.href = "http://127.0.0.1:5500/subaa/Public/HTML/login.html";
  }
};
