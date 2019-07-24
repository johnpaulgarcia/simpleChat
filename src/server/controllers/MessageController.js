const MessageModel  = require('../models/Message');
exports.createMessage = (req,res,next) => {
	let {msg} = req.body;
	let message = new MessageModel({
		message: msg
	})

	message.save(function(err){
		if(err){
			return next(err)
		}
	});

	res.send("Ok");
}