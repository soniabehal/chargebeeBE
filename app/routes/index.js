
const user=require("./subscription");
const plan=require("./plan");
const routes=[
    ...user,
    ...plan
]
module.exports=routes;
