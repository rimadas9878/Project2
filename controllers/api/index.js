const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const gameRoutes = require('./game-routes.js');
const commentRoutes = require('./comments.js');

router.use('/users', userRoutes);
router.use('/games', gameRoutes);
router.use('/comment', commentRoutes);

module.exports = router;