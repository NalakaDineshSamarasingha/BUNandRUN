// app.js

const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files (optional)
app.use(express.static('public'));

// Route handler for rendering the index page
// app.get('/', (req, res) => {
//     res.render('index', { data: {} }); // Initial rendering without data
// });

// Route handler for processing QR code data
app.get('/calculate', (req, res) => {
    // Extract parameters from the query string
    const dine_galbanis = parseInt(req.query.dine_galbanis) || 0;
    const take_galbanis = parseInt(req.query.take_galbanis) || 0;
    const dine_creambanis = parseInt(req.query.dine_creambanis) || 0;
    const take_creambanis = parseInt(req.query.take_creambanis) || 0;
    const dine_fishbun = parseInt(req.query.dine_fishbun) || 0;
    const take_fishbun = parseInt(req.query.take_fishbun) || 0;

    // Calculate total prices
    const total_galbanis = (dine_galbanis + take_galbanis) * 40;
    const total_creambanis = (dine_creambanis + take_creambanis) * 60;
    const total_fishbun = (dine_fishbun + take_fishbun) * 80;
    const overall_total = total_galbanis + total_creambanis + total_fishbun;

    // Render the result using EJS
    res.render('index', {
        data: {
            dine_galbanis,
            take_galbanis,
            total_galbanis,
            dine_creambanis,
            take_creambanis,
            total_creambanis,
            dine_fishbun,
            take_fishbun,
            total_fishbun,
            overall_total
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});