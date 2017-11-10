const Subscription = require("../modals/subscription");
const chargeBeeSubscription = require("../../thirdParty/chargeBee/subscription");
module.exports = {
    async createSubscription(req, res) {
        let data = await chargeBeeSubscription.createSubscription(req.body);
        if (data != false && data != undefined) {
            let obj = data;
            obj.billing_address = data.invoice.billing_address;
            obj.plan_id = req.body.plan_id;
            obj.plan = req.body.plan;
            obj.subscription = data.subscription.id;
            console.log("obj  ", obj);
            var subscription = new Subscription(data);
            subscription.save()
                .then((data) => {
                    res.json(data);
                })
                .catch(err => {
                    res.json(err);
                })
        }
    },
    async updateSubscription(req, res) {
        let updatedData = await chargeBeeSubscription.updateSubscription(req.body);
        if (updatedData != false && updatedData != undefined) {
            Subscription.findOneAndUpdate({ subscription:req.body.subscription }, req.body)
                .exec(function (err, data) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json(data);
                    }
                })
        }
    },
    async getSubscription(req, res) {
        Subscription.find({})
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