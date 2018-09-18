const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router.js');
const path = require('path');
const cors = require('cors');

const PORT = 4000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../static')));
app.use('/api', router);
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));