const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const superHeroSchema = new Schema({
    superhero : {type: String, required: true},
    universe : {type: String, required: true},
    superpowers: [String],
    creators: [String],
    address: {
        street: String,
        city: String,
        state: String,
        country: String
    }
});
module.exports = mongoose.model("SuperheroCollection", superHeroSchema);