const router = require('express').Router();
const Comment = require('../../models/Comment');

// route to add comments using async/await
router.post('/', async (req, res) => {
  try { 
    const commentData = await Comment.create({
    game_name: req.body.game_name,
    comment: req.body.comment,
    gamer_name: req.body.gamer_name,
  });
  // if the comment is successfully added, the new response will be returned as json
  res.status(200).json(commentData)
} catch (err) {
  console.log(err);
  res.status(400).json(err);
}
});

module.exports = router;