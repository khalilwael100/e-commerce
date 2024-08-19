let account = document.querySelector(".account");
let cartTotal = document.querySelector(".cart-total");
let checkCart = document.querySelector(".check-cart");
let cancel = document.querySelector(".cancel");
let cartCount = document.getElementById("cart-count");
let productInCart = localStorage.getItem("items");
let proCart = JSON.parse(productInCart);
let localLength = JSON.parse(productInCart).length;

let tbody = document.getElementById("tbody");

function createCart() {
  let table = "";
  for (let i = 0; i < localLength; i++) {
    table += `
            <tr>
                <td><div class="product"><img class="me-3" src="${proCart[i].img}" alt=""> <span>  <i class="fa-solid fa-xmark me-1" onclick="delItem(${i})"></i> ${proCart[i].title}</span></div></td>
                <td>$${proCart[i].price}</td>
                <td><input type="number" onkeyup="val(${i})" onclick="val(${i})" value="1" min="1" class="quantity"></td>
                <td class="subtotal">$${proCart[i].price}</td>
            </tr>
        `;
  }

  tbody.innerHTML = table;
}
createCart();

function delItem(i) {
  proCart.splice(i, 1);
  localStorage.items = JSON.stringify(proCart);
  createCart();
}

cartCount.innerHTML = localLength;
if (cartCount.innerHTML == 0) {
  cartCount.style.display = "none";
} else {
  cartCount.style.display = "block";
}

let subtotal = document.querySelectorAll(".subtotal");
let quantity = document.querySelectorAll(".quantity");

function val(i) {
  if (quantity[i].value > 0) {
    subtotal[i].innerHTML = `$${proCart[i].price * quantity[i].value}`;
  } else {
    quantity[i].value = 1;
    subtotal[i].innerHTML = `$${proCart[i].price * quantity[i].value}`;
  }
  let sum = 0;
  for (let j = 0; j < subtotal.length; j++) {
    sum = sum + proCart[j].price * quantity[j].value;
  }
  let total = `
        <h5 class="mt-3">Cart Total</h5>
        <div class="total"><span>Subtotal:</span> <span>$${sum}</span></div>
        <div class="shipping"><span>Shipping:</span> <span>free</span></div>
        <div><span>Total:</span> <span>$${sum}</span></div>
        <button onclick="check()" class="mt-4 mb-3 p-2">Procees to checkout</button>
    `;
  cartTotal.innerHTML = total;
}

function createCartTotal() {
  let sum = 0;
  for (let i = 0; i < subtotal.length; i++) {
    sum = sum + proCart[i].price * quantity[i].value;
  }
  let total = `
        <h5 class="mt-3">Cart Total</h5>
        <div class="total"><span>Subtotal:</span> <span>$${sum}</span></div>
        <div class="shipping"><span>Shipping:</span> <span>free</span></div>
        <div><span>Total:</span> <span>$${sum}</span></div>
        <button onclick="check()" class="mt-4 mb-3 p-2">Procees to checkout</button>
    `;
  cartTotal.innerHTML = total;
}
createCartTotal();

function check(e) {
  if (localLength == 0) {
    checkCart.style.display = "block";
    e.preventDefault();
  } else {
    location.href = "checkOut.html";
  }
}

checkCart.onclick = function () {
  this.style.display = "none";
};
cancel.onclick = function () {
  checkCart.style.display = "none";
};
