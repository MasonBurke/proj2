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
            defaultValue: "defaultString"
        },
        score:
        {
            type: DataTypes.INTEGER,
            
            defaultValue: 0
        }
    })
    return Session;
}