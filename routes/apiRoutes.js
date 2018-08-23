var db = require("../models");
var passport = require("../config/passport")

module.exports = function (app) {
  app.get("/api", function (req, res) {
    db.moduleIndex.findAll({}).then(function (results) {
      res.send(results);
    })
  });

  app.get("/api/module1", function (req, res) {
    db.module1.findAll({}).then(function (results) {
      res.send(results);
    });
  });

  app.get("/api/comments", function (req, res) {
    db.comments.findAll({}).then(function (results) {
      res.send(results);
    })
  });

  app.get("/api/userTable", function (req, res) {
    db.userTable.findAll({}).then(function (results) {
      res.send(results);
    })
  });

  app.get("/api/module1/:exerciseName", function (req, res) {
    var exerciseName = req.params.exerciseName;
    db.module1.findAll({
      where: {
        title: exerciseName
      }
    }).then(function (results) {
      res.json(results);
      db.comments.destroy({
        where: {},
        truncate: true
      });
    });
  });

  app.get("/api/chat", function (req, res) {
    db.chats.findAll({}).then(function (results) {
      res.send(results);
    })
  });

  app.post("/api/comments", function (req, res) {
    db.comments.create(req.body).then(function (newComment) {
      res.send(newComment);
    })
  });

  app.post("/api/chat", function (req, res) {
    db.chats.create(req.body).then(function (newChat) {
      res.send(newChat);
    })
  });

  app.get("/api/module2", function (req, res) {
    db.module2.findAll({}).then(function (results) {
      res.send(results);
    });
  });

  app.get("/api/module2/:exerciseName", function (req, res) {
    var exerciseName = req.params.exerciseName;
    db.module2.findAll({
      where: {
        title: exerciseName
      }
    }).then(function (results) {
      res.json(results);
      db.comments.destroy({
        where: {},
        truncate: true
      });
    });
  });

  app.get("/api/module3", function (req, res) {
    db.module3.findAll({}).then(function (results) {
      res.send(results);
    });
  });

  app.get("/api/module3/:exerciseName", function (req, res) {
    var exerciseName = req.params.exerciseName;
    db.module3.findAll({
      where: {
        title: exerciseName
      }
    }).then(function (results) {
      res.json(results);
      db.comments.destroy({
        where: {},
        truncate: true
      });
    });
  });

  app.get("/api/module4", function (req, res) {
    db.module4.findAll({}).then(function (results) {
      res.send(results);
    });
  });

  app.get("/api/module4/:exerciseName", function (req, res) {
    var exerciseName = req.params.exerciseName;
    db.module4.findAll({
      where: {
        title: exerciseName
      }
    }).then(function (results) {
      res.json(results);
      db.comments.destroy({
        where: {},
        truncate: true
      });
    });
  });

  app.get("/api/module5", function (req, res) {
    db.module5.findAll({}).then(function (results) {
      res.send(results);
    });
  });

  app.get("/api/module5/:exerciseName", function (req, res) {
    var exerciseName = req.params.exerciseName;
    db.module5.findAll({
      where: {
        title: exerciseName
      }
    }).then(function (results) {
      res.json(results);
      db.comments.destroy({
        where: {},
        truncate: true
      });
    });
  });

  app.get("/api/module6", function (req, res) {
    db.module6.findAll({}).then(function (results) {
      res.send(results);
    });
  });

  app.get("/api/module6/:exerciseName", function (req, res) {
    var exerciseName = req.params.exerciseName;
    db.module6.findAll({
      where: {
        title: exerciseName
      }
    }).then(function (results) {
      res.json(results);
      db.comments.destroy({
        where: {},
        truncate: true
      });
    });
  });

  app.get("/api/module7", function (req, res) {
    db.module7.findAll({}).then(function (results) {
      res.send(results);
    });
  });

  app.get("/api/module7/:exerciseName", function (req, res) {
    var exerciseName = req.params.exerciseName;
    db.module7.findAll({
      where: {
        title: exerciseName
      }
    }).then(function (results) {
      res.json(results);
      db.comments.destroy({
        where: {},
        truncate: true
      });
    });
  });

  app.get("/api/module8", function (req, res) {
    db.module8.findAll({}).then(function (results) {
      res.send(results);
    });
  });

  app.get("/api/module8/:exerciseName", function (req, res) {
    var exerciseName = req.params.exerciseName;
    db.module8.findAll({
      where: {
        title: exerciseName
      }
    }).then(function (results) {
      res.json(results);
      db.comments.destroy({
        where: {},
        truncate: true
      });
    });
  });

  app.get("/api/module9", function (req, res) {
    db.module9.findAll({}).then(function (results) {
      res.send(results);
    });
  });

  app.get("/api/module9/:exerciseName", function (req, res) {
    var exerciseName = req.params.exerciseName;
    db.module9.findAll({
      where: {
        title: exerciseName
      }
    }).then(function (results) {
      res.json(results);
      db.comments.destroy({
        where: {},
        truncate: true
      });
    });
  });

  app.get("/api/module10", function (req, res) {
    db.module10.findAll({}).then(function (results) {
      res.send(results);
    });
  });

  app.get("/api/module10/:exerciseName", function (req, res) {
    var exerciseName = req.params.exerciseName;
    db.module10.findAll({
      where: {
        title: exerciseName
      }
    }).then(function (results) {
      res.json(results);
      db.comments.destroy({
        where: {},
        truncate: true
      });
    });
  });

  app.get("/api/module11", function (req, res) {
    db.module11.findAll({}).then(function (results) {
      res.send(results);
    });
  });

  app.get("/api/module11/:exerciseName", function (req, res) {
    var exerciseName = req.params.exerciseName;
    db.module11.findAll({
      where: {
        title: exerciseName
      }
    }).then(function (results) {
      res.json(results);
      db.comments.destroy({
        where: {},
        truncate: true
      });
    });
  });

  app.get("/api/module12", function (req, res) {
    db.module12.findAll({}).then(function (results) {
      res.send(results);
    });
  });

  app.get("/api/module12/:exerciseName", function (req, res) {
    var exerciseName = req.params.exerciseName;
    db.module12.findAll({
      where: {
        title: exerciseName
      }
    }).then(function (results) {
      res.json(results);
      db.comments.destroy({
        where: {},
        truncate: true
      });
    });
  });

  app.get("/api/module13", function (req, res) {
    db.module13.findAll({}).then(function (results) {
      res.send(results);
    });
  });

  app.get("/api/module13/:exerciseName", function (req, res) {
    var exerciseName = req.params.exerciseName;
    db.module13.findAll({
      where: {
        title: exerciseName
      }
    }).then(function (results) {
      res.json(results);
      db.comments.destroy({
        where: {},
        truncate: true
      });
    });
  });

  app.get("/api/module14", function (req, res) {
    db.module14.findAll({}).then(function (results) {
      res.send(results);
    });
  });

  app.get("/api/module14/:exerciseName", function (req, res) {
    var exerciseName = req.params.exerciseName;
    db.module14.findAll({
      where: {
        title: exerciseName
      }
    }).then(function (results) {
      res.json(results);
      db.comments.destroy({
        where: {},
        truncate: true
      });
    });
  });

  app.get("/api/module15", function (req, res) {
    db.module15.findAll({}).then(function (results) {
      res.send(results);
    });
  });

  app.get("/api/module15/:exerciseName", function (req, res) {
    var exerciseName = req.params.exerciseName;
    db.module15.findAll({
      where: {
        title: exerciseName
      }
    }).then(function (results) {
      res.json(results);
      db.comments.destroy({
        where: {},
        truncate: true
      });
    });
  });

  app.get("/api/module16", function (req, res) {
    db.module16.findAll({}).then(function (results) {
      res.send(results);
    });
  });

  app.get("/api/module16/:exerciseName", function (req, res) {
    var exerciseName = req.params.exerciseName;
    db.module16.findAll({
      where: {
        title: exerciseName
      }
    }).then(function (results) {
      res.json(results);
      db.comments.destroy({
        where: {},
        truncate: true
      });
    });
  });

  // Verify email not in use
  // app.post("/api/users", function (req, res) {
  //   var newUser = req.body;

  //   db.userTable.findOrCreate({
  //     where: {
  //       email: newUser.email
  //     },
  //     defaults: {
  //       name: newUser.name,
  //       userName: newUser.userName,
  //       // email: newUser.email,
  //       password: newUser.password
  //     }
  //   }).then(function (result) {
  //     res.send(result)
  //   })
  // })

  // app.post("/api/login", passport.authenticate("local"), function (req, res) {
  //   res.json("/PTA");
  // })

  app.post("/api/users", function (req, res) {
    var newUser = req.body;

    db.userTable.findOrCreate({
      where: {
        email: newUser.email
      },
      defaults: {
        name: newUser.name,
        userName: newUser.userName,
        // email: newUser.email,
        password: newUser.password
      }
    }).then(function (result) {
        return res.send(result);
    });
  })


  // Verify Login
  app.post("/api/userVerify", passport.authenticate("local"), function (req, res) {
    var userCredentials = req.body;

    db.userTable.findOne({
      where: {
        email: userCredentials.email
      }
    }).then(function (results) {
      // console.log(results);
      if (results.dataValues.admin === true) {
        return res.json("/PTA")
      }
      (results.dataValues.admin === false)
      res.json("/STU")

    })
  })



    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function(req, res) {
      if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
      }
      else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
          email: req.user.email,
          id: req.user.id,
          name: req.user.name,
          displayName: req.user.userName,
          theme: req.user.theme,
          picture: req.user.picture,
          linkedin: req.user.linkedin,
          github: req.user.github,
          instagram: req.user.instagram,
          facebook: req.user.facebook,
          twitter: req.user.twitter,
          admin: req.user.admin
          //portfolio: req.user.portfolio
        });
      }
    })

    //update themes for the user
    app.put("/api/themes", function(req, res) {
      // Update takes in an object describing the properties we want to update, and
      // we use where to describe which objects we want to update
      db.userTable.update({
        theme: req.body.theme,
      }, {

        where: {
          email: req.body.email,
        }
      })
  });

  //logs user out
  app.get("/logout", function (req, res) {
    req.logout();
    req.session.destroy();
    res.redirect("/")
  })



}



