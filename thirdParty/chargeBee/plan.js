const chargeBee = require("../../config/chargeBee").getInstance();
module.exports = {
    async createPlan(data) {
       let plan= await chargeBee.plan.create({
            id: data.id,
            name: data.name,
            invoice_name: data.invoice_name,
            price: data.price
        }).request(function (error, result) {
            if (error) {
                console.log(error);
                return false;
            } else {
                var data = result.plan;
                return data;
            }
        });
        return plan;
    }
}