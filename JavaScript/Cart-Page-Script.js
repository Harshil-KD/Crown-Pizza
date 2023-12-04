function getCartItems() {
    return JSON.parse(sessionStorage.getItem('cart')) || [];
}

function displayCartItems() {
    const cartItems = getCartItems();
    const cartItemsElement = document.getElementById('cartItems');
    const totalAmountElement = document.getElementById('totalAmount');

    let totalAmount = 0;

    let currentIndex = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('div');
        listItem.classList.add('col-sm-4', 'themed-grid-col');

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

        card.appendChild(cardBody);
        listItem.appendChild(card);
        cartItemsElement.appendChild(listItem);

        totalAmount += item.price * item.quantity;

        currentIndex++;
    });

    totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
}

displayCartItems();

const checkoutButton = document.getElementById('checkoutButton');

checkoutButton.addEventListener('click', function () {
    window.location.href = 'Payment-Page.html';
});