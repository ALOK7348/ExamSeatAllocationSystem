const express=require("express");

const router=express.Router();

const{
addHall
}=require("../controllers/hallController");

router.post("/add",addHall);

module.exports=router;