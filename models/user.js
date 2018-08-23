var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, Sequelize) {
  var User = sequelize.define("userTable", {
    admin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      // validate: {
      //   isEmail: true
      // }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    theme: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "mdb-skin"
    },
    issue: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    picture: {
      type: Sequelize.STRING
    },
    about: {
      type: Sequelize.TEXT
    },
    linkedin: {
      type: Sequelize.STRING
    },
    github: {
      type: Sequelize.STRING
    },
    instagram: {
      type: Sequelize.STRING
    },
    facebook: {
      type: Sequelize.STRING
    },
    twitter: {
      type: Sequelize.STRING
    },
    stepOne: {
      type: Sequelize.BOOLEAN
    },
    stepTwo: {
      type: Sequelize.BOOLEAN
    },
    stepThree: {
      type: Sequelize.BOOLEAN
    },
    stepFour: {
      type: Sequelize.BOOLEAN
    },
    stepFive: {
      type: Sequelize.BOOLEAN
    },
    stepSix: {
      type: Sequelize.BOOLEAN
    },
    stepSeven: {
      type: Sequelize.BOOLEAN
    },
    stepEight: {
      type: Sequelize.BOOLEAN
    },
    stepNine: {
      type: Sequelize.BOOLEAN
    },
    stepTen: {
      type: Sequelize.BOOLEAN
    },
    stepEleven: {
      type: Sequelize.BOOLEAN
    },
    stepTwelve: {
      type: Sequelize.BOOLEAN
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.hook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return User;
};
