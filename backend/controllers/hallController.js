const db=require("../db");

const addHall=(req,res)=>{

const{
room_no,
rows_count,
cols_count,
capacity
}=req.body;

const sql=
`INSERT INTO exam_halls
(room_no,rows_count,cols_count,capacity)
VALUES(?,?,?,?)`;

db.query(
sql,
[
room_no,
rows_count,
cols_count,
capacity
],
(err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json({
message:"Hall Added Successfully"
});

});

};

module.exports={addHall};