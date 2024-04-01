const express = require('express');
const app = express();
const baseUrl = 'localhost';
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/order', (req, res) => {
    res.send({
        message: 'GET order response',
    });
});

app.post('/order', (req, res) => {
    const { item, qty } = req.body;
    res.send({
        message: 'POST order response',
        data: {
            item,
            qty
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on: http://${baseUrl}:${port}`);
});