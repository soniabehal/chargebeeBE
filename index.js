const appconfig=require("./config");
const mongoose=require("./config/mongoose");
mongoose.configureDb();
appconfig.config();




