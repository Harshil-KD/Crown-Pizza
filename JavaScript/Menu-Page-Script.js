// // Array to hold pizza objects
// let pizzas = [];

// // Loop through each pizza card and create an object for each
// for (let i = 1; i <= 9; i++) {
//     let pizza = {
//         id: i,
//         name: document.getElementById(`pizzaName${i}`).innerText,
//         type: document.getElementById(`pizzaType${i}`).innerText,
//         quantity: parseInt(document.getElementById(`pizzaQuantity${i}`).value),
//         price: parseFloat(document.getElementById(`pizzaPriceLabel${i}`).innerText.replace('$', '')),
//         // Add other properties as needed
//     };

//     // Push each pizza object into the pizzas array
//     pizzas.push(pizza);
// }

// console.log(pizzas);

// function updatePrice(pizzaNumber) {
//     const crustSize = document.getElementById(`pizzaSize${pizzaNumber}`).value;
//     let price;

//     switch (crustSize) {
//         case "small":
//             price = 20.00;
//             break;
//         case "medium":
//             price = 22.00;
//             break;
//         case "large":
//             price = 24.00;
//             break;
//         case "extraLarge":
//             price = 26.00;
//             break;
//         default:
//             price = 20.00; // Default price for XL
//     }

//     document.getElementById(`pizzaPriceLabel${pizzaNumber}`).textContent = `$${price.toFixed(2)}`;
// }



// function addToCart(name, price, quantityId, image) {
//     var quantity = parseInt(document.getElementById(quantityId).value);
//     var total = price* quantity;

//     // Construct the item object to be added to the cart
//     const item = {
//         name: name,
//         price: price,
//         quantity: quantity,
//         total: total,
//         image: image
//     };
//     // Retrieve cart items from localStorage or create an empty array if it's the first item
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Check if the item already exists in the cart based on its name
//     const existingItemIndex = cart.findIndex(cartItem => cartItem.name === name);

//     if (existingItemIndex !== -1) {
//         // If the item exists, update its quantity and total
//         cart[existingItemIndex].quantity += quantity;
//         cart[existingItemIndex].total += total;
//     } else {
//         // If it's a new item, add it to the cart
//         cart.push(item);
//     }

//     // Save the updated cart items to localStorage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     console.log("check things")
//     updateCartDisplay();
// }

// // check  


// function updateCartDisplay() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartListElement = document.getElementById('cartList');
//     const cartTotalElement = document.getElementById('cartTotal');

//     cartListElement.innerHTML = ''; // Clear previous cart items
//     let totalAmount = 0;

//     cart.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${item.name} - $${item.total.toFixed(2)}`;
//         cartListElement.appendChild(listItem);

//         totalAmount += item.total;
//     });

//     cartTotalElement.textContent = `$${totalAmount.toFixed(2)}`;
// }

let pizzas = [];

// Loop through each pizza card and create an object for each
for (let i = 1; i <= 9; i++) {
    let pizza = {
        id: i,
        name: document.getElementById(`pizzaName${i}`).innerText,
        size: 'small', // Default size
        quantity: parseInt(document.getElementById(`pizzaQuantity${i}`).value),
        price: parseFloat(document.getElementById(`pizzaPriceLabel${i}`).innerText.replace('$', '')),
        // Add other properties as needed
    };

    // Add an event listener to update the size property when the selection changes
    document.getElementById(`pizzaSize${i}`).addEventListener('change', function (event) {
        const selectedSize = event.target.value;
        pizza.size = selectedSize;

        // Update price based on size change
        updatePrice(i);
    });

    // Push each pizza object into the pizzas array
    pizzas.push(pizza);
}

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
    pizzas[pizzaNumber - 1].price = price; // Update price in the pizzas array
}

function addToCart(name, price, sizeId, quantityId, imgUrl) {
    const quantity = parseInt(document.getElementById(quantityId).value);
    const sizeDropdown = document.getElementById(sizeId);
    const selectedSize = sizeDropdown.options[sizeDropdown.selectedIndex].value;

    let updatedPrice;

    // Calculate updated price based on the selected size
    switch (selectedSize) {
        case "small":
            updatedPrice = 20.00;
            break;
        case "medium":
            updatedPrice = 22.00;
            break;
        case "large":
            updatedPrice = 24.00;
            break;
        case "extraLarge":
            updatedPrice = 26.00;
            break;
        default:
            updatedPrice = 20.00; // Default price for XL
    }

    price = updatedPrice;

    const item = {
        name: name,
        price: updatedPrice, // Use the updated price based on size
        size: selectedSize,
        quantity: quantity,
        image: imgUrl,
    };

    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === name && cartItem.size === selectedSize);

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += quantity; // Add to quantity if item already exists in the cart
    } else {
        cart.push(item); // Add new item to cart
    }

    sessionStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to session storage

    console.log(`Updated cart:`, cart); // Log updated cart after addition
}