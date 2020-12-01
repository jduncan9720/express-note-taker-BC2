## Node/Express Note Taker

## Link to site:
https://fast-reaches-10713.herokuapp.com/

## Link to Repo:
https://github.com/jduncan9720/express-note-taker-BC2

## Assignment:
The note taker is an application which enables users to write, save and delete notes.

**NOTE** Something is wrong with my delete code.  Not even my teacher could quite figure out how to fix it.  It will delete the data in the db.json file but will not show this on the DOM. 

Homework criteria:

The following HTML routes should be created:

GET /notes - Should return the notes.html file.

GET * - Should return the index.html file

The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

The following API routes should be created:

GET /api/notes - Should read the db.json file and return all saved notes as JSON.

POST /api/notes - Should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

DELETE /api/notes/:id - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

## Technologies Used

 - Html
 - Css
 - JavaScript
 - Node.js
 - File System package
 - VS Code
