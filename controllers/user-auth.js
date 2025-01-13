const userModel = require('../models/user-auth')
const jwt = require('jsonwebtoken')

const wadaw = async(req, res) => {
    
}

const userReg = async (req,res) => {
    const data = req.body
    try{
        const addUser = await userModel.userRegistration(data)
        if(addUser){
            return res.status(200).json({id:addUser.id,hash:addUser.hash})
        }
        return res.status(400).json({msg:"Registration failed."})
    } catch (error){
        console.log(error);
    }
}

const userLogin = async (req,res) => {
    const data = req.body
    try {
        const response = await userModel.userLogin(data)
        if(response){
            // res.json(response)
            const email = req.body.email;
    const token = jwt.sign({email}, process.env.JWT_SECRET, { expiresIn: "1800s" })
        return res
          .status(200)
          .json({ message: "User Logged in Successfully", token });
        }
    } catch (error) {
        console.log(error)
    }
}

const getAllUser = async (req,res) => {
    try {
        const response = await userModel.getAllUser()
        res.json(response)
    } catch (error) {
        console.log(error)
    }
}

const updateUser  = async (req, res) => {
    const userId = req.params.id; // Assuming user ID is passed as a URL parameter
    const data = req.body;
    try {
        const updatedUser  = await userModel.updateUser (userId, data);
        if (updatedUser ) {
            return res.status(200).json({ msg: "User  updated successfully.", user: updatedUser  });
        }
        return res.status(404).json({ msg: "User  not found." });
    } catch (error) {
        console.log(error);
    }
}

const deleteUser  = async (req, res) => {
    const userId = req.params.id; // Assuming user ID is passed as a URL parameter
    try {
        const deletedUser  = await userModel.deleteUser (userId);
        if (deletedUser ) {
            return res.status(200).json({ msg: "User  deleted successfully." });
        }
        return res.status(404).json({ msg: "User  not found." });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {userReg,userLogin,getAllUser,updateUser,deleteUser}