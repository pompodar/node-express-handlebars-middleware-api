const express = require('express');
const path = require('path');

const app = express();

// app.get('/', (req, res) => {
//     //res.send("hey");
//     // res.send("<h1>H1</h1>");
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

app.use(express.static(path.join(__dirname, 'public')))

const PORT = 5000;

app.listen(PORT, console.log('Server started on port 5000'))