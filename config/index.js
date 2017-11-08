const app1=require("./express");
const chargeBee=require("./chargeBee");
const env=require("./environments");
module.exports={
    config(){
        app1.configMiddleware()
        app1.configRoutes(env.URL)
        app1.configApp(env.PORT)
        chargeBee.configChargeBee(env.SITE,env.API_KEY)
    }
}