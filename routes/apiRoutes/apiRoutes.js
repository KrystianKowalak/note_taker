//Requiring all need packages and locations
const { readFromFile, writeToFile, readAndAppend } = require("../../helpers/dbHelper");
const uuidv4 = require('uuid');
const app = require("express").Router();

// GET "/api/notes" responds with all notes from the database
app.get("/notes", async (req, res) => {
    try {
        let data = await readFromFile("./db/db.json");
        return res.json(JSON.parse(data));
    } catch (err) {
        return res.status(500).json('Error in receiving notes');
    }
});

app.post("/notes", async (req, res) => {
    try {
        const { title, text } = req.body;
        
        if (title && text) {
            const newNote = {
                title,
                text,
                id: uuidv4()
            }
            await readAndAppend("./db/db.json", newNote);
            console.info(`New ${newNote.title} added to JSON file`);
    
            const response = {
                status: 'success',
                body: newNote
            }

            return res.status(201).json(response);
        } else {
            return res.status(500).json('Error in posting note')
        }
    }
    catch (err) {
        return res.status(500).json(err)
    }
});

app.delete("/notes/:id", (req, res) => {

});

//Exporting app
module.exports = app;
