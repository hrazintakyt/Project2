module.exports = function(sequelize, Sequelize) {
    var Comments = sequelize.define("comments", {
      text: {type: Sequelize.STRING},
      name: {type: Sequelize.STRING},
      stepNum: {type: Sequelize.INTEGER}
    });
    return Comments;
  };