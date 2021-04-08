var park = require('../models/park');
// List of all park
exports.park_list = async function(req, res) {
    try {
        theParks = await park.find();
        res.send(theParks);
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }

};
// for a specific park.
exports.park_detail = function(req, res) {
res.send('NOT IMPLEMENTED: park detail: ' + req.params.id);
};
// Handle park create on POST.
exports.park_create_post = async function(req, res) {
    console.log(req.body)
    let document = new park();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.Name = req.body.Name;
    document.EntryFee = req.body.EntryFee;
    document.City = req.body.City;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// Handle park delete form on DELETE.
exports.park_delete = function(req, res) {
res.send('NOT IMPLEMENTED: park delete DELETE ' + req.params.id);
};
// Handle park update form on PUT.
exports.park_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: park update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.park_view_all_Page = async function(req, res) {
    try {
        thepark = await park.find();
        res.render('park', { title: 'park Search Results', results: thepark});
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};