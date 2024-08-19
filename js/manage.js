let user = document.getElementById('user');
let account = document.querySelector('.account');
let cartCount = document.getElementById('cart-count');
let productInCart = localStorage.getItem('items');
let proCart = JSON.parse(productInCart);
let localLength = JSON.parse(productInCart).length;



cartCount.innerHTML = localLength;

user.onclick = function(){
    account.classList.toggle('account-display')
};
if(cartCount.innerHTML == 0){
    cartCount.style.display = 'none';
}else {
    cartCount.style.display = 'block';
}
