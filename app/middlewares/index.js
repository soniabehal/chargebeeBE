const bodyparser=require("body-parser");
const cors=require("cors");
module.exports={
    configMiddleware(app){
        app.use(bodyparser);
        app.use(cors);
    }
}