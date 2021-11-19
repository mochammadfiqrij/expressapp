const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("halo from express");
});

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});