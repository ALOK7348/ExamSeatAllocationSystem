const express=require("express");

const router=express.Router();

const{
allocateSeats
}=require("../controllers/allocationController");

router.post(
"/allocate",
allocateSeats
);

module.exports=router;