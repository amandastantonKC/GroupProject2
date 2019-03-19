var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main",
helpers: {
  ifeq(a,b, options) {
    console.log(a,b);
    // console.log(`options ${options}`);
    // console.log(`function ${options.fn(this)}`)
    return (a === b) ? options.fn(this) :null
  }
} }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/boardController.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
