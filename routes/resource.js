var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var park_controller = require('../controllers/park');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// park ROUTES ///
// POST request for creating a park.
router.post('/park', park_controller.park_create_post);
// DELETE request to delete park.
router.delete('/park/:id', park_controller.park_delete);
// PUT request to update park.
router.put('/park/:id', park_controller.park_update_put);
// GET request for one park.
router.get('/park/:id', park_controller.park_detail);
// GET request for list of all park items.
router.get('/park', park_controller.park_list);
module.exports = router;