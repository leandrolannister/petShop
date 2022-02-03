const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Server is running at 3000');
});

app.get('/atendimentos', (req,res) => {
    res.end('You are atendimento route');
});