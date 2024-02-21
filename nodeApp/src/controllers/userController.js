const uuid=require("uuid");
const Employee=require("../models/employeeModel")
const createUser=async(req,res)=>{
    try
    {
        console.log(req.body)
       console.log(uuid.v4());
        const newUser=new Employee({
            employeeID:uuid.v4(),
            ...req.body
        })
        console.log(newUser);
        await newUser.save();
        res.status(200).json(newUser);
    }
    catch(err)
    {
        res.status(500).json({msg:"unable to access data"});
    }
}
const getUser=async(req,res)=>{
    console.log("getting user");
    console.log(req.query)
    try{
        if(req.query.id)
        {
           const employee=await Employee.findOne({employeeID:req.query.id});
           console.log(employee);
           res.status(200).json({...employee})
        }
        else
        {
            const employees=await Employee.find();
            console.log(employees);
            res.status(200).json(employees)
        }
    }
    catch(err)
    {
        res.status(500).json({
            msg:"unable to get user"
        })
    }
}

const updateUser=async(req,res)=>{
    try{
        const updatedData=await Employee.updateOne({employeeID:req.query.id},{$set:{
            ...req.body
        }})
        console.log(updatedData);
        res.status(200).json({
            ...updatedData,
        })
    }
    catch(err)
    {
        res.status(500).json({msg:"unable to update"})
    }
}

const deleteUser=async(req,res)=>{
    try
    {
        const deletedUser=await Employee.deleteOne({employeeID:req.query.id})
        res.status(200).json({...deletedUser});
    }
    catch(err)
    {
        res.status(500).json({msg:"unable to deleteUser"})
    }

}
module.exports={createUser,getUser,updateUser,deleteUser}