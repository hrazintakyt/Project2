// This is to be filled out when we have decided how the chat table will look.

module.exports = function(sequelize, Sequelize) {
    var Chats = sequelize.define("chats", {
        text: {
            type: Sequelize.TEXT
        },
        userName: {
            type: Sequelize.STRING
        },
        currentTime: {
            type: Sequelize.DATE, defaultValue: Sequelize.NOW
        }
    });
    return Chats;
};