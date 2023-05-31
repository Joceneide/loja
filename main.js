
var addToCartButtons = document.getElementsByClassName('add-to-cart');
for (var i = 0; i < addToCartButtons.length; i++) {
addToCartButtons[i].addEventListener('click', function() {
    console.log('Produto adicionado ao carrinho!');
});
}