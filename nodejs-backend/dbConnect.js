const mongoose = require('mongoose');
const config = require('./config');

const url = config.mongoUrl;
const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

exports.dbConnect = () =>{
    connect.then((db) => {
        console.log("Connected correctly to db server");
    }, (err) => { console.log(err); });
} 
  
