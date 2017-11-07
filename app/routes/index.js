
const user=require("./user");
const plan=require("./plan");
const routes=[
    ...user,
    ...plan
]
module.exports=routes;
