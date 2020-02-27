const mongoose     = require('mongoose');
const Schema = mongoose.Schema;


 
const WordSchema = new Schema({
    2: String
});




module.exports = mongoose.model('Word', WordSchema);

