let account = document.querySelector(".account");
let cartCount = document.getElementById("cart-count");

let scrollDiv = document.getElementById("scroll");
let backButton = document.getElementById("back-button");
let nextButton = document.getElementById("next-button");

backButton.addEventListener("click", function () {
  scrollDiv.scrollLeft += -400;
});
nextButton.addEventListener("click", function () {
  scrollDiv.scrollLeft += 400;
});

let user = document.getElementById("user");
let productInCart = localStorage.getItem("items");
let proCart = JSON.parse(productInCart);
let localLength = JSON.parse(productInCart).length;

cartCount.innerHTML = localLength;

if (cartCount.innerHTML == 0) {
  cartCount.style.display = "none";
} else {
  cartCount.style.display = "block";
}
