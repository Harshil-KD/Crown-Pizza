// Array to hold pizza objects
let pizzas = [];

// Loop through each pizza card and create an object for each
for (let i = 1; i <= 9; i++) {
    let pizza = {
        id: i,
        name: document.getElementById(`pizzaName${i}`).innerText,
        type: document.getElementById(`pizzaType${i}`).innerText,
        quantity: parseInt(document.getElementById(`pizzaQuantity${i}`).value),
        price: parseFloat(document.getElementById(`pizzaPriceLabel${i}`).innerText.replace('$', '')),
        // Add other properties as needed
    };

    // Push each pizza object into the pizzas array
    pizzas.push(pizza);
}

console.log(pizzas);

function addToCart(productName, price, quantityId, imageUrl) {
    const quantity = parseInt(document.getElementById(quantityId).value);
    const total = price * quantity;

    const item = {
        name: productName,
        price: price,
        quantity: quantity,
        total: total,
        image: imageUrl
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItemIndex = cart.findIndex(cartItem => cartItem.name === productName);

    if (existingItemIndex !== -1) {
        // If the item already exists in the cart, update its quantity
        cart[existingItemIndex].quantity += quantity;
        cart[existingItemIndex].total += total;
    } else {
        // If it's a new item, add it to the cart
        cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}
