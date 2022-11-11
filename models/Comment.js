const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment: {
        type: DataTypes.STRING,
    },
    user_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }        
    },
    game_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'game',
            key: 'id'
        },
    },
},
{
    sequelize,
    freezeTableName: true,
    underscored: false,
    modelName: 'comment'    
}
);

module.exports = Comment;