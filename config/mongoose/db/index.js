module.exports={
    connectDb(mongoose){
        mongoose.connect("mongodb://chargebee:123456@ds249545.mlab.com:49545/chargebee",{useMongoClient:true},function(err,data){
            if(err){
                console.log("Error connecting database");
            }
            else{
                console.log("Connected to database");
            }
        });
    }
}