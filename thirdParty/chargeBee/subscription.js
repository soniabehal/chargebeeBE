const chargeBee = require("../../config/chargeBee").getInstance();
module.exports = {
    async createSubscription(data) {
        console.log("data ", data);
        let customer = await chargeBee.subscription.create(data)
            .request(function (error, result) {
                if (error) {
                    console.log(error);
                } else {
                    var subscription = result.subscription;
                    var customer = result.customer;
                    var card = result.card;
                    var invoice = result.invoice;
                    var unbilled_charge = result.unbilled_charge;
                    return result
                }
            });
        return customer;
    },
    async updateSubscription(data) {
        console.log("data ",data);
        let updatedData = await chargeBee.subscription.update(data.subscription, data)
            .request(function (error, result) {
                if (error) {
                    //handle error
                    return false;
                    console.log(error);
                } else {
                    //console.log(result);
                    var subscription = result.subscription;
                    var customer = result.customer;
                    var card = result.card;
                    var invoice = result.invoice;
                    var unbilled_charge = result.unbilled_charge;
                    var credit_note = result.credit_note;
                    return result;
                }
            });
            return updatedData;
    }
}