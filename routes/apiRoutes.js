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

    app.delete("/api/notes/:id", (req, res) => {

        let noteId = req.params.id;
    
        fs.readFile("./db/db.json", "utf8", (err, data) => {
          if (err) throw err;
    
          const allNotes = JSON.parse(data);
          const newAllNotes = allNotes.filter(note => note.id != noteId);
    
          fs.writeFile("./db/db.json", JSON.stringify(newAllNotes, null, 2), err => {
            if (err) throw err;
            res.send(notesData);
            console.log("Note deleted!")
          });
        });
      });

}
