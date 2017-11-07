const bodyparser=require("body-parser");
const cors=require("cors");
module.exports={
    configMiddleware(app){
        app.use(bodyparser.urlencoded({extended:true}));
        app.use(bodyparser.json());
        app.use(cors());
    }
}