const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const User = new Schema({
    firstName: {
      type: String,
        default: ''
    },
    lastName: {
      type: String,
        default: ''
    },
    email:   {
      type: String,
      default: ''
    }
});


module.exports = mongoose.model('User', User);