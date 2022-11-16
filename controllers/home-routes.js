//this is how you are supposed to navigate your site 
const router = require('express').Router();
// const withAuth = require('../../utils/auth')

router.get('/', (req, res) => {
  // 
  if (req.session.logged_in) {
    res.redirect('/games');
    return;
  }

  res.render('login');
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/games');
    return;
  }

  res.render('login');
});

router.get("/logout", (req, res) => { res.render("login") })

router.get("/games", (req, res) => { res.render("gamezone") })

router.get("/zelda", (req, res) => { res.render('zelda') })

//Route for Super Mario Kart(USA)
router.get("/SuperMarioKartSNES", (req, res) => { res.render('SuperMarioKartSNES') })

//Route for Mario Sixty Four
router.get("/mariosixtyfour", (req, res) => { res.render('mariosixtyfour') })

//Route for Megaman Sixty Four
router.get("/megamanSIXTYFOUR", (req, res) => { res.render('megamanSIXTYFOUR') })

//Route for Pokemon SILVER
router.get("/pokemnonSILVERGB", (req, res) => { res.render('pokemnonSILVERGB') })

//Route for Pokemon BLUE
router.get("/pokemonBLUEGB", (req, res) => { res.render('pokemonBLUEGB') })

//Route for South Park
router.get("/southPark", (req, res) => { res.render('southPark') })

//Route for Pokemon YELLOW
router.get("/pokemonYELLOWGB",(req,res)=> {res.render('pokemonYELLOWGB')})

router.get("/MarioKart64",(req,res)=> {res.render('MarioKart64')})

router.get("/marioAndTetris",(req,res)=> {res.render('marioAndTetris')})

router.get("/TurokSixtyFour",(req,res)=> {res.render('TurokSixtyFour')})

//Route for Star Fox
router.get("/starfoxSNES", (req, res) => { res.render('starfoxSNES') })

//Route for Super Mario World 1
router.get("/supermarioworldSNES", (req, res) => { res.render('supermarioworldSNES') })

//Route for Super Mario World 2
router.get("/supermarioworldTWOSNES", (req, res) => { res.render('supermarioworldTWOSNES') })

router.get("/bombermanSixtyFourTwo", (req, res) => { res.render('bombermanSixtyFourTwo') })

router.get("/DiddyKongQuestSNES", (req, res) => { res.render('DiddyKongQuestSNES') })

router.get("/FzeroSixtyFour", (req, res) => { res.render('FzeroSixtyFour') })

router.get("/GoldenEye", (req, res) => { res.render('GoldenEye') })

router.get("/KillerInstinctSixtyFour", (req, res) => { res.render('KillerInstinctSixtyFour') })

router.get("/KobeBryantNBAcourtside", (req, res) => { res.render('KobeBryantNBAcourtside') })

router.get("/MaddenNinetynine", (req, res) => { res.render('MaddenNinetynine') })


router.get("/contactUS", (req, res) => { res.render('contactUS') })


router.get("/allComments", (req, res) => { res.render('allComments') })


router.get("/", (req, res) => {res.render("login")})

router.get("/signup", (req, res) => {res.render("signup")})

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

