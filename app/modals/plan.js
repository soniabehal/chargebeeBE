const mongoose=require("../../config/mongoose").getInstance();
var plan=mongoose.Schema({
    features:[{type:String}],
    price:{type:String},
    id: {type:String},
    name: {type:String},
    invoice_name: {type:String},
    price: {type:Number},
    period: {type:Number},
    period_unit: {type:String},
    charge_model: {type:String},
    free_quantity: {type:Number},
    status: {type:String},
    enabled_in_hosted_pages: {type:Boolean},
    enabled_in_portal: {type:Boolean},
    updated_at: {type:Number},
    resource_version: {type:Number},
    object: {type:String},
    taxable: {type:Boolean},
    currency_code: {type:String}
})
module.exports=mongoose.model('plan',plan);