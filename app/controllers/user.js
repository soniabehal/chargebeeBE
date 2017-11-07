const User=require("../modals/user");
module.exports={
    async createUser(req,res){
        var user=new User(req.body);
        user.save()
        .then((data)=>{
            res.json(data);
        })
        .catch(err=>{
            res.json(err);
        })
    },
    async updateUser(req,res){
        User.findOneAndUpdate({_id:req.body._id},req.body)
        .exec(function(err,data){
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },
    async getUsers(req,res){
        User.find({})
        .exec(function(err,data){
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    }
}