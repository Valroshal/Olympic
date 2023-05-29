const mongoose = require("mongoose");

const sportsmenSchema = new mongoose.Schema({
    first_name: { type: String },
    last_name: { type: String },
    father_name: { type: String },
    birth: { type: String },
    birth_address: {
        town: {type: String},
        district: {type: String},
    },
    death: { type: String },
    height: { type: Number },
    weight: { type: Number },
    club: [
        { type: String }
    ],
    coach: [
        {
            first_name: {type: String},
            last_name: {type: String},
            father_name: {type: String},
            start_year: { type: String },
            end_year: { type: String },
        },
    ],
    bio: {type: String},
});

module.exports = mongoose.model("sportsmen", sportsmenSchema);
