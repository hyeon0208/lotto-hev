
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


app.use(express.static(path.join(__dirname, './')));

app.get('/', (req, res) => {
    res.sendFile('./index.html');
});

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);
});

// const lotto = require('./lotto.js');
// lotto();

