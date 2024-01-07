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


