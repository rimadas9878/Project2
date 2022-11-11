//all the database table goes here

const User = require('./User');
const Game = require('./Game');
const Comment = require('./Comment');

User.belongsToMany(Game, {
    through: Comment
});

Game.belongsToMany(User, {
    through: Comment
})

module.exports = { User, Comment, Game };
