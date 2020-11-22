var notesData = require("../db/db.json")

//Routes
module.exports = function(app){

    app.get("/api/notes", function(req, res){
        res.json(notesData)
    });

    app.post("/api/notes", function(req, res){
        res.json(notesData)
    });

    app.delete("/api/notes/:id", function(req, res){
        
    })

}
