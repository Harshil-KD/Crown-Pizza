function displayCart() {
    const cartItemsElement = document.getElementById('cartItems');
    // const cartItemsElement = document.querySelector('.row#cartItems');

    const totalAmountElement = document.getElementById('totalAmount');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartItemsElement.innerHTML = '';
    let totalAmount = 0;

    cart.forEach(item => {

        const listitem = document.createElement('div');
        listitem.classList.add('col-sm-4 themed-grid-col');

        const card = document.createElement('div');
        card.classList.add('card');


        const cardbody = document.createElement('div');
        cardbody.classList.add('card-body position-relative');

        const priceLabel = document.createElement('div');
        priceLabel.classList.add('position-absolute top-0 start-0');
        const span = document.createElement('span');
        span.classList.add('badge drinkPriceLabel');
        span.textContent = item.price;
        span.appendChild(priceLabel);
        cardbody.appendChild(priceLabel);

        const imageElement = document.createElement('img');
        imageElement.src = item.image;
        imageElement.alt = item.name;
        imageElement.classList.add('card-img-top mt-5');
        cardbody.appendChild(imageElement);

        const itemName = document.createElement('h5');
        itemName.textContent = item.name;
        cardbody.appendChild(itemName);

        const itemQuantity = document.createElement('p');
        itemQuantity.textContent = `Quantity: ${item.quantity}`;
        cardbody.appendChild(itemQuantity);

        card.appendChild(cardbody);
        listitem.appendChild(card);
        cartItemsElement.appendChild(listitem);

        totalAmount += item.total;

    })

    totalAmountElement.textContent = totalAmount;

}

window.onload = displayCart;

function clearCart() {
    localStorage.removeItem('cart');
}

// Clear the cart when the user leaves the cart page
window.addEventListener('beforeunload', function () {
    clearCart();
});

// Display the cart items when the cart page loads
window.onload = function () {
    displayCart();
}
