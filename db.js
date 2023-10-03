const mongoose = require("mongoose");
mongoose.set('strictQuery', true);


var mongoURL = 'mongodb+srv://Kethmini:kethmini.123@cluster0.1pgwlnn.mongodb.net/mern-rooms'
//mongodb+srv://Kethmini:kethmini.123@cluster0.1pgwlnn.mongodb.net/mern-rooms
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true})

var connection = mongoose.connection

connection.on('error', () => {
    console.log('MongoDB connection failed') 
})

connection.on('connected', () => {
    console.log('MongoDB connection successful') 
})

module.exports = mongoose