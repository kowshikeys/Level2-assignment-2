const completed = document.querySelector(".done");
const cancel = document.querySelector(".cancel");
completed.addEventListener("click", () => {
  const cardNumber = document.getElementById("name").value;
  const cardHolder = document.getElementById("card").value;
  const expireDate = document.getElementById("date").value;
  const cvcCode = document.getElementById("cvv").value;

  if (cardNumber === "") {
    alert("card number not filled");
    return;
  }
  if (cardHolder === "") {
    alert("card holder not filled");
    return;
  }
  if (expireDate === "") {
    alert("Expir date not filled");
    return;
  }
  if (cvcCode === "") {
    alert("CVC code not filled");
    return;
  }
  window.location.href =
    "http://127.0.0.1:5500/kowshik/Public/Html/payment.html";
});

cancel.addEventListener("click", () => {
  window.location.href =
    "http://127.0.0.1:5500/kowshik/Public/Html/product.html";
});
