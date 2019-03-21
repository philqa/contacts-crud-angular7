const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Contact = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone_number: {
    type: Number
  }
},{
    collection: 'contacts'
});

module.exports = mongoose.model('Contact', Contact);
