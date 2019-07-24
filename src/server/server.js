const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const cors = require('cors');
var socket = require('socket.io')(http);
const router = require('./routes');
mongoose.connect('mongodb://localhost:27017');
app.use(cors());
app.use(express.json());
app.use(router);
http.listen(3001,()=>{
	console.log("SOCKET LISTENING");
});
