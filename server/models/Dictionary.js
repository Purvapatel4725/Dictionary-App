const mongoose = require('mongoose');

// Create a model class for the dictionary entries
const dictionarySchema = mongoose.Schema({
    word: String,
    meaning: String,
    examples: [String] // An array to store multiple examples for a word
},
{
    collection: "Dictionary" // Collection name in your database
});

module.exports = mongoose.model('Dictionary', dictionarySchema);
