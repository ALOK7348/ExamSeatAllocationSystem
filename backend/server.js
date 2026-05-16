
const viewRoutes=
require("./routes/viewRoutes");

const hallRoutes=require("./routes/hallRoutes");

const express=require("express");
const cors=require("cors");
const db=require("./db");

const allocationRoutes=
require("./routes/allocationRoutes");

const app=express();

app.use(cors());
app.use(express.json());
const studentRoutes=require("./routes/studentRoutes");

app.use("/students",studentRoutes);
app.use("/halls",hallRoutes);
app.use(
"/allocation",
allocationRoutes
);
app.use("/result",viewRoutes);


app.get("/",(req,res)=>{
res.send("Exam Hall Seat Allocation Server Running");
});

const PORT=5000;

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`);
});