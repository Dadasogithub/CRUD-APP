import User from "../models/usermodel.js";


export const create = async(req,res) =>{
    try{
        const userData = new User(req.body);   //data come from front end

        if(!userData){
            return res.status(400).json({msg:"User data not Found"});
        }

        const saveData = await userData.save();
        res.status(200).json(saveData);

    }catch(error){
            res.status(500).json({error: error});
    }
}

export const getall = async(req,res)=>{
    try{
        const UserData = await User.find();
        if(!UserData){
            res.status(404).json({msg:"Users Data not found"})
        }
        res.status(200).json(UserData);
    }
    catch(error){
        res.status(500).json({error: error});
    }
}

export const getone =async(req,res) =>{
    try{
        const id= req.params.id;
        const UserExist = await User.findById(id);
        if(!UserExist){
            res.status(404).json({msg:"Users Data not found"})
        }
        res.status(200).json(UserExist);
    }
    catch(error){
        res.status(500).json({error: error});
    }
}

export const update =async(req,res) =>{
    try{
        const id= req.params.id;
        const UserExist = await User.findByIdAndUpdate(id);
        if(!UserExist){
            res.status(404).json({msg:"Users Data not found"})
        }
        const UpdateData = await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(UpdateData);
    }
    catch(error){
        res.status(500).json({error: error});
    }
}


export const deleteUser = async(req ,res) =>{
    try{
        const id= req.params.id;
        const UserExist =  await User.findById(id);
        if(!UserExist){
            res.status(404).json({msg:"Users not Exist"})
        }
        await User.findByIdAndDelete(id);;
        res.status(200).json({msg:"User deleted successfully"});
    }
    catch(error){
        res.status(500).json({error: error});
    }
}