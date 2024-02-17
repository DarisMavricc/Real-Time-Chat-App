import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

export const Login = async(req,res) => {
    const {username,password} = req.body;
    if(username && password) {
        const user = await User.findOne({username});
        if(user){
            bcrypt.compare(password,user.password, function(err,exist) {
                if(exist){
                    const data = {
                        id: user._id,
                        username: user.username,
                    }
                    const token =  jwt.sign(data,'secret',{expiresIn: '1hr'});
                    res.cookie("accessToken",token);
                    res.status(200).json(data);
                } else {
                    res.status(401).json('Username or Password is Incorrect!');
                }
            })
        }else {
            res.status(404).json('User does not exist!');
        }
    } else {
        res.status(400).json('All fields are mandatory');
    }
}



export const Register = async(req,res) => {
    const {full_name,email,username,password} = req.body;
    if(full_name && email && password && username) {
        const newpassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            full_name,
            email,
            username,
            password: newpassword
        }) 
        if(user){
            const data = {
                id: user._id,
                username: user.username
            }
            const token =  jwt.sign(data,'secret',{expiresIn: '1hr'});
            res.cookie("accessToken",token).status(201).json(data);
        } else {
            res.status(400).json('Error');
        }
    } else {
        res.status(400).json('All fields are mandatory');
    }
}

export const getUser = (req,res) => {
    
}