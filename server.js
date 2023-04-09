const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})
app.get("/Images/backgroundimage.jpg", (req, res) => {
    res.sendFile(path.join(__dirname + "/Images/backgroundimage.jpg"));
})
// serving the index.html file 

var PORT = process.env.PORT || 5000:
const server = app.listen(PORT);
const portNumber = server.address().port;
console.log(`port: ${portNumber}`);
// can see the port number in terminal - you can dictate the port number