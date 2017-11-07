const planControllers=require("../controllers/plan");
module.exports=[
    {
        path:'/plan',
        method:'GET',
        controller:planControllers.getPlan
    },
    {
        path:'/plan',
        method:'POST',
        controller:planControllers.createPlan
    },
    {
        path:'/plan',
        method:'PUT',
        controller:planControllers.updatePlan
    }
]