exports.conLog = () => {
	console.log("Okay")
	return function(dispatch){
		dispatch({
			type: "message",
			message: "This is a message"
		})
	}
}

exports.dePop = () => {
	return function(dispatch){
		dispatch({
			type: "data",
		})
	}
}