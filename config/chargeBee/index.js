const chargeBee=require("chargebee");
module.exports={
    configChargeBee(site,apiKey){
        chargeBee.configure({
            site:site,
            api_key:apiKey
        })
        console.log("Charge Bee configured @ site ",site," api_key ",apiKey);
    },
    getInstance(){
        return chargeBee;
    }
}