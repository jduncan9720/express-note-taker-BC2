const fs = require("fs");
var notesData = require("../db/db.json")
const { v4:uuidv4 } = require("uuid")
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//Routes
module.exports = function(app){
//function here to grab notes
    app.get("/api/notes", function(req, res){
        console.log(notesData)
        res.json(notesData)
    });

    app.post("/api/notes", function(req, res){
        console.log(req.body)
        notesData.push({...req.body, id:uuidv4()})
        fs.writeFile("db/db.json", JSON.stringify(notesData), function(err, log){
            if (err){
                throw err
            } else {
                res.json(true)
            }
        })
    });

    app.delete("/api/notes/:id", function(req, res){
        let filteredNotes = notesData.filter(note => note.id !== req.params.id);
        console.log("filtered", filteredNotes)
        return writeFileAsync("db/db.json", JSON.stringify(filteredNotes)).then(function(err, log){
            if (err){
                throw err
            } else {
               return res.json({
                   ok: true
               })
            }
        })

    })

}
