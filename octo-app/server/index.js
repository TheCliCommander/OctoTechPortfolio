const express = require('express');
const path = require('path');
const app = exprexx();
const PORT = process.env.PORT || 3000;

//Serve static files from the Vue app build dir
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

