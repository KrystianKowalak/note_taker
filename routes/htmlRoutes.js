//Requiring all need packages and locations
const path = require("path");
const app = require("express").Router();

//Path for notes.html
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//Exporting app
module.exports = app;
  