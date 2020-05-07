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