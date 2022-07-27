const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Server jamming on port ${port}`);
})