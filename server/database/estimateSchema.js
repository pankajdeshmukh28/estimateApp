const mongoose = require('mongoose' );

const estimateSchema = new mongoose.Schema({
    chapter: String,
    itemNumber: String,
    refNumber: String,
    description: String,
    unit: String
});

module.exports = mongoose.model('Estimate', estimateSchema);