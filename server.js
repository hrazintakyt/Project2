require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var session = require("express-session");

//Requiring passport as we configure it in our app
var passport = require("./config/passport")

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's Login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

var server = require("http").Server(app);
var io = require("socket.io")(server);
io.on('connection', function (socket) {
  socket.on("newExercise", function(data) {
    io.emit("newExercise", data);  
  });
  socket.on("newCompleted", function(data) {
    io.emit("newCompleted", data);
  });
  socket.on("newComment", function(data) {
    io.emit("newComment", data);
  });
  socket.on("newChat", function(data) {
    io.emit("newChat", data);
  });
  socket.on("newAdminChat", function(data) {
    io.emit("newAdminChat", data);
  });
  socket.on("newTime", function(data) {
    console.log("server " + data);
    io.emit("newTime", data);
  });
});

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  server.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
