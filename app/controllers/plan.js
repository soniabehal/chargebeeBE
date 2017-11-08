const Plan = require("../modals/plan");
const chargeBeePlan = require("../../thirdParty/chargeBee/plan");
module.exports = {
    async createPlan(req, res) {
        let data = await chargeBeePlan.createPlan(req.body);
        if (data != false && data !=undefined) {
            let obj=data.plan;
            obj.features=req.body.features;
            var plan = new Plan(obj);
            plan.save()
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    res.json(err);
                })
        }
    },
    async updatePlan(req, res) {
        Plan.findOneAndUpdate({ _id: res.body._id }, req.body)
            .exec(function (err, data) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(data);
                }
            })
    },
    async getPlan(req, res) {
        Plan.find({})
            .exec(function (err, data) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(data);
                }
            })
    }
}