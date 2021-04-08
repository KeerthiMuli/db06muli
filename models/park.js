const mongoose = require("mongoose")
const parkSchema = mongoose.Schema({
    Name: String,
    EntryFee: String,
    City: String
})
module.exports = mongoose.model("park", parkSchema)