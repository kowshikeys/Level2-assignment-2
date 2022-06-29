// checkout function to fill the input box and proccess successfully

const proceed = document.querySelector("#proceed");
const cancel = document.querySelector("#cancel");
proceed.addEventListener("click", () => {
  const cardNumber = document.getElementById("cdnumber").value;
  const cardHolder = document.getElementById("cdholder").value;
  const expireDate = document.getElementById("expiredt").value;
  const cvcCode = document.getElementById("cvc").value;

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
    "http://192.168.0.108:5500/suganya/public/HTML/successed.html";
});

cancel.addEventListener("click", () => {
  window.location.href =
    "http://192.168.0.108:5500/suganya/public/HTML/Jewellery.html";
});
