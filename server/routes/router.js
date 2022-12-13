const express=require("express");
const {Task}=require('../models/models');
//const router=express.Router();
// router.get('/:id');
//"id -first use :to fetch and then var name u want to return ie.id"
/*router.get('/',(request,response)=>{
    // '/'will return on browser normally
   // response.send("Hello there!")
  // res.send(req.params.id);//params-parameters returns id params
 const task=new Task({
    todo : 'Make Lunch',
    isComplete : false
  })
  task.save((err,doc)=>{
    if(err) console.log(err)
    console.log(doc);
  })
  const tasks=new Task({
    todo : 'Do work',
    isComplete : false
  })
  tasks.save((err,doc)=>{
    if(err) console.log(err)
    console.log(doc)
  })
  task.save((err,doc)=>{
    if(err) console.log(err)
    console.log(doc);
  })
 Task.find((err,doc)=>{
    if(err) console.log(err)
    response.json(doc);//to convert data into string

  })
 
});

router.post('/',(request,response)=>{
  const task=new Task(request.body)
  task.save((err,doc)=>{
    if(err) console.log(err)
    response.json(doc);
  })
})
//update the data
router.put('/',(request,response)=>{
  Task.findOneAndUpdate({
    _id:request.params.id//update data by id

  },request.body,{
    new:true
  },(err,doc)=>{
    if(err) console.log(err)
    response.json(doc)
  })

})*/
const getData=async(request,response)=>{
  var _id=request.query.id;
  // if(_id){
  //     var allStudents=await Student.
  // }
  var Todo=await Task.find();
  return response.json(Todo);
}
const createData= async (request,response) => {
  console.log(request.body);
  await Task.create(request.body);
  return response.json({status:"Data added in Todo"});
}
const updateData=async(request,response)=>{
  var _id=request.query.id;
  var data=request.body;
  await Task.findByIdAndUpdate(_id,data);
  console.log(_id,data);

       return response.json({status:"TodoList updated"})
}
const deleteData=async(request,response)=>{
  var _id=request.query.id;
  await Task.findByIdAndDelete(_id);
  return response.json({status:"Data Deleted"});
}

module.exports={getData,createData,updateData,deleteData};
