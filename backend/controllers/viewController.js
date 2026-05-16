const db=require("../db");

const getAllocations=(req,res)=>{

const sql=`

SELECT
students.name,
students.roll_no,
exam_halls.room_no,
allocations.seat_no

FROM allocations

JOIN students
ON students.student_id=
allocations.student_id

JOIN exam_halls
ON exam_halls.hall_id=
allocations.hall_id

`;

db.query(sql,(err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json(result);

});

};

module.exports={getAllocations};