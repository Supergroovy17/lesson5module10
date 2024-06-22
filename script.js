let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts(products) {
    // Get the container element where the products will be displayed
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Clear any existing content

    // Loop through each product and create HTML elements to display its details
    products.forEach(product => {
        // Create a div for each product
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        // Create and append the product name element
        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        // Create and append the product price element
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
        productDiv.appendChild(productPrice);

        // Create and append the product description element
        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription);

        // Append the product div to the container
        container.appendChild(productDiv);
    });
}

// Add event listener to trigger display of products when the page loads
window.addEventListener('DOMContentLoaded', (event) => {
    displayProducts(products);
});






