var mongoose = require("../../config/mongoose").getInstance();
var subscription = mongoose.Schema({
  customer: {
    first_name: { type: String },
    last_name: { type: String },
    company: { type: String },
    email: { type: String },
    password: { type: String },
    locale: { type: String },
    phone: { type: String }
  },
  plan_id: {
    type: String
  },
  plan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'plan'
  },
  billing_address: {
    type: mongoose.Schema.Types.Mixed
  },
  subscription:{
    type:String
  }
})
module.exports = mongoose.model('subscription', subscription);