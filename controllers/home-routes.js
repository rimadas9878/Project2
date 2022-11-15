//this is how you are supposed to navigate your site 
const router = require('express').Router();
// const withAuth = require('../../utils/auth')

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/games');
    return;
  }

  res.render('login');
});

router.get("/games",(req,res)=>
 {res.render("gamezone")})

 router.get("/zelda",(req,res)=>
 {res.render('zelda')}) // create more of these for the games to work

router.get("/",(req,res) => {
  res.render("login")
})

router.get("/signup",(req,res) => {
  res.render("signup")
})

router.get('/', (req, res) => {
  console.log("=====================")
  console.log("games-route")
  console.log(req)
  console.log("=====================")
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
    res.render('games', {
      title: "GAMEATHON", 
      user: req.session.username
    });
    return;
  // }

  res.redirect('login');
});



module.exports = router;
// this is wher you set up you res and all that 

// use mini proj for unit 14 to use the syntax for this 

