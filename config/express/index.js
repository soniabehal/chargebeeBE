const express=require('express');
const middleware=require("../../app/middlewares");
const app=express();
module.exports={
    configMiddleware(){
        middleware.configMiddleware(app);
    },
    configApp(port){
        app.listen(port,function(err,data){
            if(err){
                console.log("Error!! occured while configuring app");
            }
            else{
                console.log("Server started on port ",port);
            }
        })
    }
}
