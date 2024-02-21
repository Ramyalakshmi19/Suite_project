const express=require("express");
const router=express.Router();
const {createUser,deleteUser,updateUser,getUser}=require("../controllers/userController")

router.get("/",getUser);
router.post("/new_user",createUser);
router.delete("/delete_user",deleteUser);
router.put("/update_user",updateUser);

module.exports=router;