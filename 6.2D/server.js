// Import the Express module so we can create a web server.
const express = require('express');

// Import Node.js's built-in 'path' module to help with file paths.
const path = require('path');

// Create an instance of an Express application.
const app = express();

// Define the port number to listen on.
// It uses an environment variable PORT if provided; otherwise, it defaults to 3000.
const PORT = process.env.PORT || 3000;

// Set up middleware to serve static files from the "public" folder.
// This means that when a request is made to the root URL ("/"),
// Express will look for a file named index.html (or other static assets) inside the "public" directory.
app.use(express.static(path.join(__dirname, 'public')));

// Define a GET endpoint at '/square' that calculates the square of a number.
// The endpoint expects a query parameter 'num', e.g., /square?num=5
app.get('/square', (req, res) => {
    // Extract the 'num' query parameter from the request and convert it to a floating point number.
    const num = parseFloat(req.query.num);

    // Check if 'num' is not a valid number. If it's not, send an error message as the response.
    if (isNaN(num)) {
        return res.send("Error: Please provide a valid number using query parameter 'num'.");
    }
    // Calculate the square of the number.
    const square = num * num;
    // Send a plain text response showing the result.
    res.send(`The square of ${num} is: ${square}`);
});

// Define a GET endpoint at '/add' that calculates the addition of two numbers.
// Create a GET endpoint at /add
app.get('/add', (req, res) => {
    // Parse the numbers from the query parameters
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    // Check if 'num' is not a valid number. If it's not, send an error message as the response.
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Error: Please provide a valid number using query parameter 'num'.");
    }

    // Calculate the sum
    const sum = a + b;
    
    // Send a plain text response showing the result.
    res.send(`The addition of ${a} + ${b} is: ${sum}`);
});

// Define a GET endpoint at '/sub' that calculates the subtraction of two numbers.
// Create a GET endpoint at /sub
app.get('/sub', (req, res) => {
    // Parse the numbers from the query parameters
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    // Check if 'num' is not a valid number. If it's not, send an error message as the response.
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Error: Please provide a valid number using query parameter 'num'.");
    }

    // Calculate the sum
    const sum = a - b;
    
    // Send a plain text response showing the result.
    res.send(`The subtraction of ${a} - ${b} is: ${sum}`);
});

// Define a GET endpoint at '/mul' that calculates the multiplication of two numbers.
// Create a GET endpoint at /mul
app.get('/mul', (req, res) => {
    // Parse the numbers from the query parameters
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    // Check if 'num' is not a valid number. If it's not, send an error message as the response.
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Error: Please provide a valid number using query parameter 'num'.");
    }

    // Calculate the sum
    const sum = a * b;
    
    // Send a plain text response showing the result.
    res.send(`The multiplication of ${a} * ${b} is: ${sum}`);
});

// Define a GET endpoint at '/div' that calculates the division of two numbers.
// Create a GET endpoint at /div
app.get('/div', (req, res) => {
    // Parse the numbers from the query parameters
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    // Check if 'num' is not a valid number. If it's not, send an error message as the response.
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Error: Please provide a valid number using query parameter 'num'.");
    }

    // Calculate the sum
    const sum = a / b;
    
    // Send a plain text response showing the result.
    res.send(`The division of ${a} / ${b} is: ${sum}`);
});

// Start the server and have it listen on the specified port.
// Once the server is running, log a message to the console indicating where it's accessible.
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
