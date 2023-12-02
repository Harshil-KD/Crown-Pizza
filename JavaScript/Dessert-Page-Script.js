function addToCart(name, price, quantityId, image) {
    const quantity = parseInt(document.getElementById(quantityId).value);


    // Construct the item object to be added to the cart
    const item = {
        name: name,
        price: price,
        quantity: quantity,
        image: image
    };

    // Retrieve cart items from localStorage or create an empty array if it's the first item
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

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
    sessionStorage.setItem('cart', JSON.stringify(cart));
}