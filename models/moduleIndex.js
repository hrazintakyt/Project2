module.exports = function(sequelize, Sequelize) {
    var ModuleIndex = sequelize.define("moduleIndex", {
      moduleName: {type: Sequelize.STRING},
      moduleTableName: {type: Sequelize.STRING},
      moduleJSName: {type: Sequelize.INTEGER}
    }, {
      freezeTableName: true
  });
    return ModuleIndex;
  };