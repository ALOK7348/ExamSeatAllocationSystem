const db=require("../db");

const addStudent=(req,res)=>{

const{name,roll_no,branch,semester}=req.body;

const sql=
`INSERT INTO students(name,roll_no,branch,semester)
VALUES(?,?,?,?)`;

db.query(
sql,
[name,roll_no,branch,semester],
(err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json({
message:"Student Added Successfully"
});

});

};

module.exports={addStudent};