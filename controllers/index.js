const router = require('express').Router();
const apiRoutes = require('./api');
const homeRouters = require('./home-Routes');

router.use('/api', apiRoutes);
router.use('/', homeRouters);

module.exports = router;
