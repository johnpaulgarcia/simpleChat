const router = require('express').Router();
const MessageController  = require('./controllers/MessageController');
router.route('/').get((req,res)=>{
	res.send('OK');
});

router.route('/create/user').post(MessageController.createMessage);

module.exports = router;