var express = require('express');
const park_controlers= require('../controllers/park');
var router = express.Router();
/* GET park */
router.get('/', park_controlers.park_view_all_Page );

module.exports = router;
