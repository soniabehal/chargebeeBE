const User = require("../modals/user");
const chargeBeeSubscription = require("../../thirdParty/chargeBee/subscription");
module.exports = {
    async createUser(req, res) {
        let data = await chargeBeeSubscription.createSubscription(req.body);
        if (data != false && data != undefined) {
            let obj = data.customer;
            obj.billing_address=data.invoice.billing_address;
            console.log("obj  ",obj);
            var user = new User(obj);
            user.save()
                .then((data) => {
                    res.json(data);
                })
                .catch(err => {
                    res.json(err);
                })
        }
    },
    async updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.body._id }, req.body)
            .exec(function (err, data) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(data);
                }
            })
    },
    async getUsers(req, res) {
        User.find({})
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