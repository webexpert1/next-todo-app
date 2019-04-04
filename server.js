const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();


app.prepare().then(() => {
    const server = express();

    server.get('/api/todos', (req, res) => {
        return res.status(201).send({
            todo: [
                {item: 'Have a bath', key: 1, done: false},
                {item: 'Code Javascript for 1 hour', key: 2, done: false},
                {item: 'Publish to github', key: 3, done: false},
            ]
        })
    });

    server.get('*', (req, res) => {
        return handle(req, res)
    });


    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`)
    })
}).catch(ex => {
    console.error(ex);
    process.exit(1)
});