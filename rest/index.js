const path = require('path');
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const app = express();
const baseUrl = 'localhost';
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        id: uuidv4(),
        username: 'Andy',
        text: 'wah kamu hebat sekali broh!'
    },
    {
        id: uuidv4(),
        username: 'Belstong',
        text: 'anjinkk emangg dia!'
    },
    {
        id: uuidv4(),
        username: 'Dani',
        text: 'ini kapan gajian nyaaa?'
    },
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/create', (req, res) => {
    res.render('comments/create');
});

app.post('/comments', (req, res) => {
    let id = uuidv4();
    const { username, text } = req.body;
    comments.push({ id, username, text });
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
});

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