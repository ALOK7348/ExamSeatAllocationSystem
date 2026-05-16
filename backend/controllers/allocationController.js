const db=require("../db");

const allocateSeats=(req,res)=>{

db.query(
"DELETE FROM allocations",
(err)=>{

if(err){
return res.status(500).json(err);
}

db.query(
"SELECT * FROM students ORDER BY roll_no",
(err,students)=>{

if(err){
return res.status(500).json(err);
}

db.query(
"SELECT * FROM exam_halls",
(err,halls)=>{

if(err){
return res.status(500).json(err);
}

let totalCapacity=0;

for(let hall of halls){
totalCapacity+=hall.capacity;
}

if(students.length>totalCapacity){

return res.json({
message:
"Not enough seats available"
});

}

let studentIndex=0;

for(let hall of halls){

for(let r=1;r<=hall.rows_count;r++){

for(let c=1;c<=hall.cols_count;c++){

if(studentIndex>=students.length)
break;

let seatNo=
String.fromCharCode(64+r)+c;

let student=
students[studentIndex];

db.query(

`INSERT INTO allocations
(student_id,hall_id,seat_no)
VALUES(?,?,?)`,

[
student.student_id,
hall.hall_id,
seatNo
]

);

studentIndex++;

}

}

}

res.json({
message:
"Seats Allocated Successfully"
});

});

});

});

};

module.exports={allocateSeats};