const userControllers=require("../controllers/user");
module.exports=[
    {
        path:'/user',
        method:'GET',
        controller:userControllers.getUsers
    },
    {
        path:'/user',
        method:'POST',
        controller:userControllers.createUser
    },
    {
        path:'/user',
        method:'PUT',
        controller:userControllers.updateUser
    }
]