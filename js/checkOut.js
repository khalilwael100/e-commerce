
let checkOut = document.querySelector('.checkOut');
let cartCount = document.getElementById('cart-count');
let productInCart = localStorage.getItem('items');
let proCart = JSON.parse(productInCart);
let localLength = JSON.parse(productInCart).length;



cartCount.innerHTML = localLength;

if(cartCount.innerHTML == 0){
    cartCount.style.display = 'none';
}else {
    cartCount.style.display = 'block';
}





function createCart(){
    let tableDiv = '';
    for(let i = 0; i < localLength; i++){
        tableDiv += `
        <div><span><img src="${proCart[i].img}" alt="">${proCart[i].title}</span>  <span>$${proCart[i].price}</span></div>
        `
    }

    checkOut.innerHTML = `${tableDiv}
    <div class="totalCheck"></div>
    `;
}
createCart();





let totalCheck = document.querySelector('.totalCheck');

function createCheckTotal(){
    let sum = 0;
    for(let i = 0; i < localLength; i++){
        sum = sum + proCart[i].price;
    }
    console.log(sum)
    let total =`
        <div class="subtotal"><span>Subtotal:</span> <span>$${sum}</span></div>
        <div class="shipping"><span>Shipping:</span> <span>free</span></div>
        <div><span>Total:</span> <span>$${sum}</span></div>
    `;
    totalCheck.innerHTML = total;
    console.log(totalCheck)
}
createCheckTotal();