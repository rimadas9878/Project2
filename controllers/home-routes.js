//this is how you are supposed to nabigate your site 
const router = require('express').Router();



router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;

// this is wher you set up you res and all that 

// use mini proj for unit 14 to use the syntax for this 