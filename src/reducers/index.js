const data = [
	
  
];

module.exports = (state='',action) => {
	switch(action.type){
		case "message" : {
			 return {
			 	message: action.message
			 }
		}

		case "data": {
			return {
				data: data
			}
		}

		break;
		default:
			return state
	}
}