// Function to retrieve cart items from session storage or return an empty array if none exist
function getCartItems() {
    return JSON.parse(sessionStorage.getItem('cart')) || [];
}


// Function to display cart items on the page
function displayCartItems() {
    // Fetch cart items from session storage
    const cartItems = getCartItems();

    // Get DOM elements
    const cartItemsElement = document.getElementById('cartItems');
    const totalAmountElement = document.getElementById('totalAmount');

    let totalAmount = 0; // Variable to calculate total amount of items in the cart

    let currentIndex = 0;
    // Loop through each item in the cart and create HTML elements to display them
    cartItems.forEach(item => {
        // Create HTML elements
        const listItem = document.createElement('div');
        listItem.classList.add('col-sm-4', 'themed-grid-col');

        // ... (creating card, card body, image, buttons, etc.)
        const card = document.createElement('div');
        card.classList.add('card');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'position-relative');

        const priceLabel = document.createElement('div');
        priceLabel.classList.add('position-absolute', 'top-0', 'start-0');
        const span = document.createElement('span');
        span.classList.add('badge', 'priceLabel');
        span.textContent = `$${item.price}`;
        priceLabel.appendChild(span);
        cardBody.appendChild(priceLabel);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('btn', 'btn-danger', 'remove-btn', 'position-absolute', 'top-0', 'end-0');
        removeButton.addEventListener('click', () => {

            const itemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);

            if (itemIndex !== -1) {
                cartItems.splice(itemIndex, 1);

                sessionStorage.setItem('cart', JSON.stringify(cartItems));
                console.log('Cart after removal:', cartItems);

                listItem.remove();

                totalAmount -= item.price * item.quantity;
                totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
            }
        });

        cardBody.appendChild(removeButton);

        const imageElement = document.createElement('img');
        imageElement.src = item.image;
        imageElement.alt = item.name;
        imageElement.classList.add('card-img-top', 'mt-5');
        cardBody.appendChild(imageElement);

        const itemName = document.createElement('h5');
        itemName.textContent = item.name;
        cardBody.appendChild(itemName);
        if (item.hasOwnProperty('size')) {
            const itemSize = document.createElement('p');
            itemSize.textContent = `Size: ${item.size}`;
            cardBody.appendChild(itemSize);
        }

        const itemQuantity = document.createElement('p');
        itemQuantity.textContent = `Quantity: ${item.quantity}`;
        cardBody.appendChild(itemQuantity);

        // Adding created elements to the DOM
        card.appendChild(cardBody);
        listItem.appendChild(card);
        cartItemsElement.appendChild(listItem);

        // Update total amount by calculating price * quantity for each item
        totalAmount += item.price * item.quantity;

        currentIndex++;
    });

    // Display total amount in the designated element
    totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
}

// Call function to display cart items when the page loads
displayCartItems();

// Get checkout button and add an event listener to redirect to payment page on click
const checkoutButton = document.getElementById('checkoutButton');
checkoutButton.addEventListener('click', function () {
    window.location.href = 'Payment-Page.html';
});

// Functionality to remove items from the cart when "Remove" button is clicked
// ... (logic inside the 'remove' button event listener)