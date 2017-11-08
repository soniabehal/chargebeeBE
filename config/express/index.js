const express=require('express');
const routes=require('../../app/routes');
const middleware=require("../../app/middlewares");
const app=express();
var self=module.exports={
    configMiddleware(){
        middleware.configMiddleware(app);
        
        return self;
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
        return self;
    },
    configRoutes(url){
      routes.forEach(route=>{
            var s=route.path;
            if(route.method=='GET'){
                app.get(s,route.controller);
                
            }
            else if(route.method=='POST'){
                app.post(s,route.controller);
                
            }
            else if(route.method=='PUT'){
                app.put(s,route.controller);
                
            }
            else if(route.method=='DELETE'){
                app.delete(s,route.controller);
                
            }
        })
        return self
    }
}
