// =====================
// ADD STUDENT
// =====================

async function addStudent(){

const data={

name:
document.getElementById("name").value,

roll_no:
document.getElementById("roll").value,

branch:
document.getElementById("branch").value,

semester:
document.getElementById("semester").value

};


// Save student
const response=await fetch(
"http://localhost:5000/students/add",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

}
);

const result=await response.json();


// Auto reallocate seats
await fetch(
"http://localhost:5000/allocation/allocate",
{
method:"POST"
}
);


// Clear fields
document.getElementById("name").value="";
document.getElementById("roll").value="";
document.getElementById("branch").value="";
document.getElementById("semester").value="";


alert(
"Student Added and Seats Updated Successfully"
);

window.location.href="result.html";

}




// =====================
// ADD HALL
// =====================

async function addHall(){

const data={

room_no:
document.getElementById("room").value,

rows_count:
document.getElementById("rows").value,

cols_count:
document.getElementById("cols").value,

capacity:
document.getElementById("capacity").value

};


// Save hall
const response=await fetch(
"http://localhost:5000/halls/add",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

}
);

const result=await response.json();


// Auto reallocate seats
await fetch(
"http://localhost:5000/allocation/allocate",
{
method:"POST"
}
);


// Clear fields
document.getElementById("room").value="";
document.getElementById("rows").value="";
document.getElementById("cols").value="";
document.getElementById("capacity").value="";


alert(
"Hall Added and Seats Reallocated Successfully"
);

window.location.href="result.html";

}




// =====================
// MANUAL ALLOCATION
// =====================

async function allocateSeats(){

const response=
await fetch(
"http://localhost:5000/allocation/allocate",
{
method:"POST"
}
);

const result=
await response.json();

alert(result.message);

window.location.href="result.html";

}




// =====================
// LOAD RESULT TABLE
// =====================

async function loadResults(){

const response=
await fetch(
"http://localhost:5000/result/view"
);

const data=
await response.json();

let temp="";

data.forEach(student=>{

temp+=`

<tr>

<td>${student.name}</td>

<td>${student.roll_no}</td>

<td>${student.room_no}</td>

<td>${student.seat_no}</td>

</tr>

`;

});

document.getElementById(
"tableBody"
).innerHTML=temp;

}


// Auto-load results if result page is open
if(
window.location.href.includes("result.html")
){

loadResults();

}