window.onload = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (!user) {
    window.location.href = "http://127.0.0.1:5500/Public/HTML/login.html";
  }
  // console.log(user);
};

const button = document.querySelector("#button");

button.addEventListener("click", function () {
  sessionStorage.clear();
  window.location.href = "http://127.0.0.1:5500/Public/HTML/login.html";
});

const btn = document.querySelector(".close-nav-menu");
const bar = document.querySelector(".navbar");

function openMenu() {
  bar.style.display = "block";
}

function closeMenu() {
  bar.style.display = "none";
}
