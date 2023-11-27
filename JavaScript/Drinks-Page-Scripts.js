function addToCart(name, price, quantityInputId, image) {
    const quantity = document.getElementById(quantityInputId).valueAsNumber || 1;

    const item = {
        name: name,
        price: price,
        quantity: quantity,
        total: price * quantity,
        image: image
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}
