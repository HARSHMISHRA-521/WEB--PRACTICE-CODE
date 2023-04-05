const express = require("express")

const app = express();
const port = 80;
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