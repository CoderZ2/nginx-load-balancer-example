const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('here');
    return res.send(req.protocol + '://' + req.get('host') + req.originalUrl);
});

app.listen("5555", () => {
    console.log(`Server is running at port 5555`)
})