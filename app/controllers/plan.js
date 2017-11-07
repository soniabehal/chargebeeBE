const Plan=require("../modals/plan");
module.exports={
    async createPlan(req,res){
        console.log("hii")
        var plan=new Plan(req.body);
        plan.save()
        .then((data)=>{
            res.json(data);
        })
        .catch((err)=>{
            res.json(err);
        })
    },
    async updatePlan(req,res){
        Plan.findOneAndUpdate({_id:res.body._id},req.body)
        .exec(function(err,data){
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },
    async getPlan(req,res){
        Plan.find({})
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