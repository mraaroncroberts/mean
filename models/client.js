// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our model
// mongoose docs: https://mongoosejs.com/docs/guide.html
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Client', {
    name : {type : String, default: ''},
    email: {type: String, default: ''},
    phone: {type: String, default: ''},
    address: {type: String, default: ''}
});