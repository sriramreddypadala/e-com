let cart = [];
let orders = [];

// Function to add a product to the cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`${productName} has been added to your cart.`);
}

// Function to show a specific section
function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');

    // Show the selected section
    if (section === 'home') {
        document.getElementById('product-list').style.display = 'grid';
    } else if (section === 'cart') {
        showCart();
    } else if (section === 'orders') {
        showOrders();
    } else {
        document.getElementById(section).style.display = 'block';
    }
}

// Function to display the cart items
function showCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `${item.name} - $${item.price}`;
            cartItemsContainer.appendChild(div);
        });
    }

    // Show the cart section
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById('cart').style.display = 'block';
}

// Function to show the orders
function showOrders() {
    const ordersContainer = document.getElementById('orders');
    ordersContainer.innerHTML = '<h1>Your Orders</h1>';

    if (orders.length === 0) {
        ordersContainer.innerHTML += '<p>No orders yet.</p>';
    } else {
        orders.forEach(order => {
            const div = document.createElement('div');
            div.textContent = `Order: ${order.name} - $${order.price}`;
            ordersContainer.appendChild(div);
        });
    }

    // Show the orders section
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    ordersContainer.style.display = 'block';
}

// Function for checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        cart.forEach(item => {
            orders.push(item); // Add each item in the cart to orders
        });
        alert('Your order has been placed!');

        // Clear the cart after checkout
        cart = [];
        showCart(); // Update the cart display
        showOrders(); // Update the orders display
    }
}
// Function to handle logout
function logout() {
    alert('You have been logged out.');
    showSection('home'); // Redirect to home page
}

// Add event listener for logout button
document.getElementById('logout-btn').addEventListener('click', logout);
