module.exports = function(sequelize, Sequelize) {
    var Module2 = sequelize.define("module2", {
        title: {
            type: Sequelize.TEXT
        },
        description: {
            type: Sequelize.TEXT
        },
        countDown: {
            type: Sequelize.INTEGER
        },
        stepOne: {
            type: Sequelize.TEXT
        },
        stepTwo: {
            type: Sequelize.TEXT
        },
        stepThree: {
            type: Sequelize.TEXT
        },
        stepFour: {
            type: Sequelize.TEXT
        },
        stepFive: {
            type: Sequelize.TEXT
        },
        stepSix: {
            type: Sequelize.TEXT
        },
        stepSeven: {
            type: Sequelize.TEXT
        },
        stepEight: {
            type: Sequelize.TEXT
        },
        stepNine: {
            type: Sequelize.TEXT
        },
        stepTen: {
            type: Sequelize.TEXT
        },
        stepEleven: {
            type: Sequelize.TEXT
        },
        stepTwelve: {
            type: Sequelize.TEXT
        }
    }, {
        freezeTableName: true
    });
    return Module2;
};