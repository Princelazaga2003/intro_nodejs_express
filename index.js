const express = require('express');
const app = express();
const port = 3000;
const items =['Appple', 'Banna', 'Orange'];

//Serve Static files from the the "public" folder
app.use(express.static('public'));

//Define a route for the home page
app.get('/',(req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

//Start the Server
app.listen(port,() => {
    console.log(`Server running at http://localhost:${port}`);
});

app.use(express.json()); //Middleware to parse Json Bodies

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

app.get('/items', (req, res)=> {
    res.json(items);
});

app.post('/items', (req, res)=> {
    const newItem = req.body.item;
    items.push(NewItem);
    res.json(items);
});

