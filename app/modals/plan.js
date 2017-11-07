const mongoose=require("mongoose");
var plan=mongoose.Schema({
    features:[{type:String}],
    price:{type:String},
})
module.exports=mongoose.model('plan',plan);