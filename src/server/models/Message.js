const mongoose = require('mongoose');
// add models and properties
const Message = mongoose.Schema({
	message: {type: String}
});

module.exports = mongoose.model('message',Message);