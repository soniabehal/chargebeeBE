var mongoose=require("mongoose");
var user=mongoose.Schema({
    name:{type:String},
    company:{type:String},
    email:{type:String},
    password:{type:String},
    //plan:{}
    //card:{}

})
module.exports=mongoose.model('user',user);