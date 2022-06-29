// checkout function to fill the input box and proccess successfully

const cancel = document.getElementById("cancel");
const proceed = document.querySelector("#proceed");

proceed.addEventListener("click", function () {
  const cardHolder = document.getElementById("cardHolder").value;
  const cardNumber = document.getElementById("cardNumber").value;
  const expirationDate = document.getElementById("expirationDate").value;
  const cardVerification = document.getElementById("cardVerification").value;

  if (cardHolder === "") {
    alert("card holder not filled");
    return;
  }
  if (cardNumber === "") {
    alert("card number not filled");
    return;
  }
  if (expirationDate === "") {
    alert("expiration date not filled");
    return;
  }
  if (cardVerification === "") {
    alert("card verification not filled");
    return;
  }
  window.location.href =
    "http://127.0.0.1:5500/public/HTML/paymentSuccess.html";
});

cancel.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/public/HTML/allJwellery.html";
});
