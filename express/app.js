const express = require("express")
const path = require('path');
const app = express();
const port = 80;


// serving static files
app.use('/static',express.static('static'))

// set the template engine as pug
app.set('view engine','pug');

// set the views directory
app.set('views',path.join(_dirname,'views'))

// our pug demo endpoint
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey Harsh', message: 'Hello there! and lets us ethe pug.' })
})

app.get("/", (req, res) => {
    res.status(200).send("This is homepage of my first express app with Harsh")
});
app.get("/about", (req, res) => {
    res.send("This is about of my  first express app with Harsh")
});
app.post("/about", (req, res) => {
    res.send("This is a post request about of my  first express app with Harsh")
});
app.get("/this", (req, res) => {
    res.status(400).send("This page is not found")
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
});