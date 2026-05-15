
const cartCount = document.getElementById('cart-count');
const addCartButtons = document.querySelectorAll('.add-cart');

let totalItems = 0;

addCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        totalItems++;
        
        cartCount.textContent = totalItems;
        
        alert('Producto añadido al carro correctamente');
    });
});
