const app=require("./express");
const env=require("./environments");
module.exports={
    config(){
    app.configMiddleware()
    app.configApp(env.PORT)
    }
}