//import the express module

const express = require('express');

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send("Welcome to my node.js app, its running on port: " + PORT)
}); 


app.listen(PORT, ()=> {
    console.log("Server is running on port:", PORT)
})