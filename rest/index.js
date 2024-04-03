const path = require('path');
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
        username: 'Andy',
        text: 'wah kamu hebat sekali broh!'
    },
    {
        username: 'Bella',
        text: 'Terima kasih banyak!'
    },
    {
        username: 'Charlie',
        text: 'Sangat menakjubkan!'
    },
    {
        username: 'David',
        text: 'Aku bangga padamu!'
    },
    {
        username: 'Eva',
        text: 'Keren banget!'
    },
    {
        username: 'Frank',
        text: 'Kerja bagus!'
    },
    {
        username: 'Grace',
        text: 'Selamat ya!'
    },
    {
        username: 'Henry',
        text: 'Kamu luar biasa!'
    },
    {
        username: 'Irene',
        text: 'Aku terinspirasi!'
    },
    {
        username: 'Jack',
        text: 'Sungguh keren!'
    },
    {
        username: 'Katherine',
        text: 'Inspiratif sekali!'
    },
    {
        username: 'Leo',
        text: 'Saya kagum!'
    },
    {
        username: 'Mia',
        text: 'Bagus sekali!'
    },
    {
        username: 'Nathan',
        text: 'Keep it up!'
    },
    {
        username: 'Olivia',
        text: 'Sangat mengesankan!'
    },
    {
        username: 'Peter',
        text: 'Wow, luar biasa!'
    },
    {
        username: 'Quinn',
        text: 'Bravo!'
    },
    {
        username: 'Rachel',
        text: 'Hebat sekali!'
    },
    {
        username: 'Samuel',
        text: 'Sungguh luar biasa!'
    },
    {
        username: 'Tina',
        text: 'Saya bangga!'
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
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