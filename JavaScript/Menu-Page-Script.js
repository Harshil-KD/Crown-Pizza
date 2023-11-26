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


// Array to hold pizza objects
let cart = [];

// Loop through each pizza button and attach a click event listener
for (let i = 1; i <= 9; i++) {
    document.getElementById(`pizzaButton${i}`).addEventListener('click', function () {
        addToCart(i);
    });
}

// Function to handle adding a pizza to the cart
function addToCart(pizzaId) {
    let pizza = {
        id: pizzaId,
        name: document.getElementById(`pizzaName${pizzaId}`).innerText,
        type: document.getElementById(`pizzaType${pizzaId}`).innerText,
        quantity: parseInt(document.getElementById(`pizzaQuantity${pizzaId}`).value),
        price: parseFloat(document.getElementById(`pizzaPriceLabel${pizzaId}`).innerText.replace('$', '')),
        // Add other properties as needed
    };

    // Push the pizza object into the pizzas array
    cart.push(pizza);
    console.log('Pizza added to cart:', pizza);
}

