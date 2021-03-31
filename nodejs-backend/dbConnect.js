const mongoose = require('mongoose');
const config = require('./config');

var url = '';

if(process.env && process.env.NODE_ENV && process.env.NODE_ENV==='local'){
    url = config.mongoUrl;
}else{
    url = config.dockerMongoUrl;
}
console.log(url)
const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

exports.dbConnect = () =>{
    connect.then((db) => {
        console.log("Connected correctly to db server");
    }, (err) => { console.log(err); });
} 
  
