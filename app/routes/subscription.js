const userControllers=require("../controllers/subscription");
module.exports=[
    {
        path:'/subscription',
        method:'GET',
        controller:userControllers.getSubscription
    },
    {
        path:'/subscription',
        method:'POST',
        controller:userControllers.createSubscription
    },
    {
        path:'/subscription',
        method:'PUT',
        controller:userControllers.updateSubscription
    }
]