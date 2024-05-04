const express = require('express');
const app = express();
const path = require('path');
// Add CSP headers to your Express app
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self' 'unsafe-inline' https://ka-f.fontawesome.com; img-src 'self' data: *; script-src 'self' 'unsafe-inline'  https://kit.fontawesome.com/ https://cdn.jsdelivr.net/; style-src 'self' 'unsafe-inline' https://kit.fontawesome.com/ https://cdn.jsdelivr.net/")
    console.log('CSP headers set successfully')//add console log here
    next();
});

//Serve static files from the 'OctopusPortfolio/img' folder
app.use('/img', express.static(path.join(__dirname, 'img'), {'extensions':['png', 'jpg']}));
//Serve static files from the CSS folder
app.use('/css', express.static(path.join(__dirname, 'css'), {'extensions':['css']}));
//Serve static files from the js folder
app.use('/js', express.static(path.join(__dirname, 'js'), {'extensions': ['css']}));
// Define a route to serve the landing.html file with corrected file path
app.get('/', (_, res) => {
    console.log('Request received for landing.html page');
    res.sendFile(path.join(__dirname, 'landing.html'));
});



const port = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
/********Node.js********* */ 

// src/backend/server.js
const expess = require('express');
const app = expess();
const port = process.env.PORT || 3000;

app.use(express.static('OctopusPortfolio'));// Serve files fromo OctopusPortfolio folder
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


