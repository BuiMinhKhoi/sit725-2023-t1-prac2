const dotenv = require('dotenv');
var express = require('express');
var app = express();
dotenv.config();
var port = process.env.PORT;

app.get('/addTwoNumbers', (req, res) => {
    var num1 = parseInt(req.query.num1);
    var num2 = parseInt(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        res.json({ data: null, message: 'Invalid input', status: 400 });
        return;
    }
    var sum = num1 + num2;
    res.json({ data: sum, message: 'Success', status: 200 });

});

app.use((req, res, err, next) => {
    if (err) {
        res.json({ data: null, message: 'Invalid input', status: 400 });
    }
});

app.listen(port, () => {
    console.log('Server is running on port: ', port);
});