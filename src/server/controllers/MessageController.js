const MessageModel  = require('../models/Message');
exports.createMessage = (req,res,next) => {
	let message = new MessageModel({
		message: "testing message"
	})

	message.save(function(err){
		if(err){
			return next(err)
		}
	});

	res.send("Ok");
}