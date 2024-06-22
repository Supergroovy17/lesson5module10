document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear previous error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let valid = true;

    // Validate name
    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required.';
        valid = false;
    }

    // Validate email
    if (email === '') {
        document.getElementById('email-error').textContent = 'Email is required.';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('email-error').textContent = 'Email format is invalid.';
        valid = false;
    }

    // Validate message
    if (message === '') {
        document.getElementById('message-error').textContent = 'Message is required.';
        valid = false;
    }

    if (valid) {
        // Create an object to store user input
        const userInput = {
            name: name,
            email: email,
            message: message
        };

        console.log('User Input:', userInput);
        alert('Form submitted successfully!');
    }
});