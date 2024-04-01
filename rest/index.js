const express = require('express');
const app = express();
const baseUrl = 'localhost';
const port = 5000;

app.get('/order', (req, res) => {
    res.send({
        message: 'GET order response',
    });
});

app.post('/order', (req, res) => {
    res.send({
        message: 'POST order response',
    });
});

app.listen(port, () => {
    console.log(`Server is running on: http://${baseUrl}:${port}`);
});