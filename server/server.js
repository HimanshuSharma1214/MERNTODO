//console.log("Node.js");
//const cors=require("cors");
//const parser=require("body-parser");

const express=require('express');//importing express
//const router=require('./routes/router');
const { getData , createData , updateData , deleteData }=require('./routes/router');
const cors=require("cors");
//const parser=require("body-parser");
require('./models/db');
const app=express();
app.use(express.json());//to parse the data
app.use(cors());
//app.use(parser.json());

//const mongoose=require("mongoose");

//dotenv.config();
//require('./models/db');
/*try{
    mongoose.set("strictQuery", true);

      
    
mongoose.connect("mongodb://localhost:27017/Todo")}
catch(e){
console.log("error");
}
mongoose.connection.on("connected",()=>{
    console.log("DB Connected");
});*/



//app.use(cors());
//app.use(parser.json()); 

//app.use('/api/tasks',router);//write on browser 'localhost:5000/api/tasks'
app.get("/getData",getData);
app.post("/createData",createData);
app.put("/updateData",updateData);
app.delete("/deleteData",deleteData);
app.listen('5000',(err)=>{//callback function
   if(err){
    console.log(err);}
    console.log("Server started at port number 5000");
   
})