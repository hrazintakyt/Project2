var db = require("../models");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index")
 });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/PTA", isAuthenticated, function(req, res){

    if (req.user.admin){
        var handlebarsObject = {
          layout: "inClass.handlebars",
          chats: [],
          comments: [],
        }
        db.chats.findAll({}).then(function (results) {
          for (i = 0; i < results.length; i++) {
            handlebarsObject.chats.push({
              text: results[i].text,
              name: results[i].userName
            });
          }
        })
        db.comments.findAll({}).then(function (results) {
          for (i = 0; i < results.length; i++) {
            handlebarsObject.comments.push({
              name: results[i].name,
              text: results[i].text,
              stepNum: results[i].stepNum
            });
          }
        })
        res.render("instructor", handlebarsObject);
      } else {
        res.redirect("/STU");
      }

  });
  
  app.get("/STU", isAuthenticated, function(req, res){
    if (req.user.admin === false){
      var handlebarsObject = {
        layout: "inClass.handlebars",
        chats: [],
        comments: [],
      }
      db.chats.findAll({}).then(function (results) {
        for (i = 0; i < results.length; i++) {
          handlebarsObject.chats.push({
            text: results[i].text,
            name: results[i].userName
          });
        }
      })
      db.comments.findAll({}).then(function (results) {
        for (i = 0; i < results.length; i++) {
          handlebarsObject.comments.push({
            name: results[i].name,
            text: results[i].text
          });
        }
      })
      res.render("student", handlebarsObject);
    } else if (req.user.admin === true){
      res.redirect("/PTA");
    }
  });

  // app.get("/PTA", function (req, res) {
  //   var handlebarsObject = {
  //     layout: "inClass.handlebars",
  //     chats: [],
  //     comments: [],
  //   }
  //   db.chats.findAll({}).then(function (results) {
  //     for (i = 0; i < results.length; i++) {
  //       handlebarsObject.chats.push({
  //         text: results[i].text,
  //         name: results[i].userName
  //       });
  //     }
  //   })
  //   db.comments.findAll({}).then(function (results) {
  //     for (i = 0; i < results.length; i++) {
  //       handlebarsObject.comments.push({
  //         name: results[i].name,
  //         text: results[i].text
  //       });
  //     }
  //   })
  //   res.render("instructor", handlebarsObject);
  // });



  // Render 404 page for any unmatched routes **Needs to be at the end of all the routes**
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
