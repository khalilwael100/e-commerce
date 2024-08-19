let user = document.getElementById("user");
let account = document.querySelector(".account");
let cartCount = document.getElementById("cart-count");
let productInCart = localStorage.getItem("items");
let proCart = JSON.parse(productInCart);
let localLength = JSON.parse(productInCart).length;

cartCount.innerHTML = localLength;

user.onclick = function () {
  account.classList.toggle("account-display");
};
if (cartCount.innerHTML == 0) {
  cartCount.style.display = "none";
} else {
  cartCount.style.display = "block";
}

let up = document.querySelector(".up");
window.onscroll = function () {
  if (window.scrollY >= 1000) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};

up.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// ==========  Header  ============
let woman = document.querySelector(".woman");
let men = document.querySelector(".men");
let dropWoman = document.querySelector(".drop-woman");
let dropMen = document.querySelector(".drop-men");

woman.addEventListener("click", function () {
  dropWoman.classList.toggle("display");
  dropMen.classList.remove("display");
});
men.addEventListener("click", function () {
  dropMen.classList.toggle("display");
  dropWoman.classList.remove("display");
});

// ==========  Today's  ============
let scrollDiv = document.getElementById("scroll");
let backButton = document.getElementById("back-button");
let nextButton = document.getElementById("next-button");

backButton.addEventListener("click", function () {
  scrollDiv.scrollLeft += -400;
});
nextButton.addEventListener("click", function () {
  scrollDiv.scrollLeft += 400;
});

let products = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    imgUrl: "images/g92-2-500x500 1.png",
    newPrice: 120,
    oldPrice: 160,
    discount: -40,
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    imgUrl: "images/ak-900-01-500x500 1.png",
    newPrice: 960,
    oldPrice: 1160,
    discount: -35,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    imgUrl: "images/g27cq4-500x500 1.png",
    newPrice: 370,
    oldPrice: 400,
    discount: -30,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    imgUrl: "images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
    newPrice: 375,
    oldPrice: 400,
    discount: -25,
  },
  {
    id: 5,
    title: "HAVIT HV-G92 Gamepad",
    imgUrl: "images/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png",
    newPrice: 78,
    oldPrice: 80,
    discount: -35,
  },
  {
    id: 6,
    title: "HAVIT HV-G92 Gamepad",
    imgUrl: "images/g92-2-500x500 1.png",
    newPrice: 78,
    oldPrice: 80,
    discount: -35,
  },
  {
    id: 7,
    title: "HAVIT HV-G92 Gamepad",
    imgUrl: "images/g92-2-500x500 1.png",
    newPrice: 78,
    oldPrice: 80,
    discount: -35,
  },
  {
    id: 8,
    title: "HAVIT HV-G92 Gamepad",
    imgUrl: "images/g92-2-500x500 1.png",
    newPrice: 78,
    oldPrice: 80,
    discount: -35,
  },
  {
    id: 9,
    title: "HAVIT HV-G92 Gamepad",
    imgUrl: "images/g92-2-500x500 1.png",
    newPrice: 78,
    oldPrice: 80,
    discount: -35,
  },
];

function showProduct() {
  let productUI = "";
  for (let i = 0; i < products.length; i++) {
    productUI += `
        <div class="item-card p-2 me-3">
            <span class="dicsount ps-2 pe-2 pt-1 pb-1">${products[i].discount}%</span>
            <div class="img mt-5">
                <img src="${products[i].imgUrl}" alt="">
                <button onclick = "addCart(${i})">Add Cart</button>
            </div>
            <h3 class="mt-3">${products[i].title}</h3>
            <div class="price"><span class="new-price me-3">$${products[i].newPrice}</span> <span class="old-price">$${products[i].oldPrice}</span></div>
            <div class="icons mt-1">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
        </div>
        `;
  }
  scrollDiv.innerHTML = productUI;
}
showProduct();

let arrProducts;
if (localStorage.products != null) {
  arrProducts = JSON.parse(localStorage.items);
} else {
  arrProducts = [];
}

function addCart(i) {
  let newData = {
    title: products[i].title,
    price: products[i].newPrice,
    img: products[i].imgUrl,
    discount: products[i].discount,
  };
  arrProducts.push(newData);
  localStorage.setItem("items", JSON.stringify(arrProducts));
}

// ==========  Categories ============

let scrollDiv1 = document.getElementById("scroll1");
let backButton1 = document.getElementById("back-button1");
let nextButton1 = document.getElementById("next-button1");

backButton1.addEventListener("click", function () {
  scrollDiv1.scrollLeft += -400;
});
nextButton1.addEventListener("click", function () {
  scrollDiv1.scrollLeft += 400;
});
