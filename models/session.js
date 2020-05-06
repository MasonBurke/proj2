
// CREATE TABLE quizSession (
//     id INT auto_increment not null primary key,
//     userName VARCHAR(10) NOT NULL,
//     quizCategory VARCHAR(10) NOT NULL,
//     score INT DEFAULT 0
//     );

module.exports = function (sequelize, DataTypes) {
    const Session = sequelize.define("Session", {
        userName:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        quizCategory:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        score:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    })
    return Session;
}