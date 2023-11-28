// function displayCart() {
//     const cartItemsElement = document.getElementById('cartItems');
//     const totalAmountElement = document.getElementById('totalAmount');

//     // Retrieve cart data from local storage or initialize an empty array
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     cartItemsElement.innerHTML = '';
//     let totalAmount = 0;

//     // Loop through each item in the cart and display them
//     cart.forEach(item => {


//         const listitem = document.createElement('div');
//         listitem.classList.add('col-sm-4', 'themed-grid-col');

//         const card = document.createElement('div');
//         card.classList.add('card');

//         const cardbody = document.createElement('div');
//         cardbody.classList.add('card-body', 'position-relative');

//         const priceLabel = document.createElement('div');
//         priceLabel.classList.add('position-absolute', 'top-0', 'start-0');
//         const span = document.createElement('span');
//         span.classList.add('badge', 'priceLabel');
//         span.textContent = `$${item.price}`;
//         priceLabel.appendChild(span);
//         cardbody.appendChild(priceLabel);

//         const imageElement = document.createElement('img');
//         imageElement.src = item.image;
//         imageElement.alt = item.name;
//         imageElement.classList.add('card-img-top', 'mt-5');
//         cardbody.appendChild(imageElement);

//         const itemName = document.createElement('h5');
//         itemName.textContent = item.name;
//         cardbody.appendChild(itemName);

//         const itemQuantity = document.createElement('p');
//         itemQuantity.textContent = `Quantity: ${item.quantity}`;
//         cardbody.appendChild(itemQuantity);

//         card.appendChild(cardbody);
//         listitem.appendChild(card);
//         cartItemsElement.appendChild(listitem);


//         // Update the total amount based on item prices and quantities
//         totalAmount += (item.price * item.quantity);

//         // Append the created elements to the cart items element
//         // ...

//         cartItemsElement.appendChild(listitem);
//     });

//     // Update the total amount displayed on the page
//     totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
// }

// // Call displayCart when the cart page loads
// window.onload = function () {
//     displayCart();
// };

// // Clear the local storage when the window is about to unload (close or navigate away)
// window.addEventListener('beforeunload', function () {
//     localStorage.clear();
// });

function displayCart() {
    const cartItemsElement = document.getElementById('cartItems');
    const totalAmountElement = document.getElementById('totalAmount');

    // Retrieve cart data from local storage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartItemsElement.innerHTML = '';
    let totalAmount = 0;

    // Loop through each item in the cart and display them
    cart.forEach(item => {


        const listitem = document.createElement('div');
        listitem.classList.add('col-sm-4', 'themed-grid-col');

        const card = document.createElement('div');
        card.classList.add('card');


        const cardbody = document.createElement('div');
        cardbody.classList.add('card-body', 'position-relative');


        const priceLabel = document.createElement('div');
        priceLabel.classList.add('position-absolute', 'top-0', 'start-0');
        const span = document.createElement('span');
        span.classList.add('badge', 'priceLabel');
        span.textContent = `$${item.price}`;
        priceLabel.appendChild(span);
        cardbody.appendChild(priceLabel);

        // const removeButton = document.createElement('button');
        // removeButton.innerHTML = '<i class="bi bi-x-circle"></i>'; // Assuming Bootstrap icons
        // removeButton.classList.add('btn', 'btn-danger', 'remove-item-btn');
        // removeButton.addEventListener('click', () => removeItemFromCart(item));
        // cardbody.appendChild(removeButton);

        const imageElement = document.createElement('img');
        imageElement.src = item.image;
        imageElement.alt = item.name;
        imageElement.classList.add('card-img-top', 'mt-5');
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


        // Update the total amount based on item prices and quantities
        totalAmount += (item.price * item.quantity);

        // Append the created elements to the cart items element
        // ...

        cartItemsElement.appendChild(listitem);
    });

    // Update the total amount displayed on the page
    totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
}

// Output the total amount to the console for verification
console.log('Total Amount:', totalAmount);

// Function to remove item from cart and update display
function removeItemFromCart(itemToRemove) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Filter out the item to be removed from the cart
    let newcart = cart.filter(item => item !== itemToRemove);

    // Update the cart in local storage
    localStorage.setItem('cart', JSON.stringify(newcart));

    // Refresh the cart display
    displayCart();
}

// Call displayCart when the cart page loads
window.onload = function () {
    displayCart();
};

// Clear the local storage when the window is about to unload (close or navigate away)
window.addEventListener('onunload', function () {
    localStorage.clear();
});