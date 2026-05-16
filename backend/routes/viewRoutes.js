const express=require("express");

const router=express.Router();

const{
getAllocations
}=require("../controllers/viewController");

router.get(
"/view",
getAllocations
);

module.exports=router;