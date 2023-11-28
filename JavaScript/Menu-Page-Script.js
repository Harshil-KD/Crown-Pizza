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

function updatePrice(pizzaNumber) {
    const crustSize = document.getElementById(`pizzaSize${pizzaNumber}`).value;
    let price;

    switch (crustSize) {
        case "small":
            price = 20.00;
            break;
        case "medium":
            price = 22.00;
            break;
        case "large":
            price = 24.00;
            break;
        case "extraLarge":
            price = 26.00;
            break;
        default:
            price = 20.00; // Default price for XL
    }

    document.getElementById(`pizzaPriceLabel${pizzaNumber}`).textContent = `$${price.toFixed(2)}`;
}



function addToCart(name, price, quantityId, image) {
    const quantity = parseInt(document.getElementById(quantityId).value);
    const total = price * quantity;

    // Construct the item object to be added to the cart
    const item = {
        name: name,
        price: price,
        quantity: quantity,
        total: total,
        image: image
    };

    // Retrieve cart items from localStorage or create an empty array if it's the first item
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item already exists in the cart based on its name
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === name);

    if (existingItemIndex !== -1) {
        // If the item exists, update its quantity and total
        cart[existingItemIndex].quantity += quantity;
        cart[existingItemIndex].total += total;
    } else {
        // If it's a new item, add it to the cart
        cart.push(item);
    }

    // Save the updated cart items to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}
