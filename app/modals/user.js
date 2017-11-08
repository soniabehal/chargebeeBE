var mongoose = require("mongoose");
var user = mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  company: { type: String },
  email: { type: String },
  password: { type: String },
  locale: { type: String },
  phone: { type: String },
  plan_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'plan'
  },
  plan: { type: String },
  billing_address: {
    first_name: { type: String },
    last_name: { type: String },
    line1: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String }
  },
  addons: [{
    id: { type: String }
  }]
  //card:{}

})
module.exports = mongoose.model('user', user);