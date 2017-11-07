const app1=require("./express");
const env=require("./environments");
module.exports={
    config(){
        app1.configMiddleware()
        app1.configRoutes(env.URL)
        app1.configApp(env.PORT)
    }
}