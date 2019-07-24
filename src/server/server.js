const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
var socket = require('socket.io')(http);
app.use(cors());
app.use(express.json());
http.listen(3001,()=>{
	console.log("SOCKET LISTENING");
});

app.get('/',(req,res)=>{
	res.json({message: 'XXX'})
})