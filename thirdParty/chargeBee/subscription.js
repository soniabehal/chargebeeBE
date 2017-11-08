const chargeBee = require("../../config/chargeBee").getInstance();
module.exports = {
    async createSubscription(data) {
       let customer= await chargeBee.subscription.create({
            plan_id: data.plan,
            customer: {
                email: data.email,
                first_name: data.first_name,
                last_name: data.last_name,
                locale: data.locale,
                phone: data.phone
            },
            billing_address: data.billing_address
        }).request(function (error, result) {
            if (error) {
                //handle error
                console.log(error);
            } else {
               // console.log(result);
                var subscription = result.subscription;
                var customer = result.customer;
                var card = result.card;
                var invoice = result.invoice;
                var unbilled_charge = result.unbilled_charge;
                return result
            }
        });
        return customer;
    }
}