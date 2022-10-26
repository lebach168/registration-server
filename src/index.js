const express = require('express');
const port = 3001;
const router = require("./routes");
const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
var bodyParser = require('body-parser')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors(corsOptions))

app.get('/', (req, res) => res.status(200).send('Hi!'));
app.post('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
