const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    game_name: {
        type: DataTypes.STRING,
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: false,
    modelName: 'game'
}
);

module.exports = Game;