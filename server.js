var express = require("express");

var app = express()

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Serves to the frontend
app.use(express.static("public"))

//Router

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});