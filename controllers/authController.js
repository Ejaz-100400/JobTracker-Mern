import {StatusCodes} from 'http-status-codes'
import User from '../models/usermodels.js'
import { hashedPassword } from '../utils/passwordutils.js';
import { comparePassword } from '../utils/passwordutils.js';
import { createJWT } from '../utils/tokenUtils.js';

import { UnauthorizedError } from '../errors/customErrors.js';




export const register = async (req, res) => {
  const isFirstAccount = await User.countDocuments()===0;
  req.body.role=isFirstAccount?'admin':'user';
  // convert password into hash
  const hashPassword =await hashedPassword(req.body.password);
  req.body.password=hashPassword;
  
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({msg:"User registered successfully"});
};


export const login = async(req,res)=>{
  // for email 
  const user = await User.findOne({email:req.body.email})

  if(!user){
    res.status(401).json({msg:"invalid email"});
  }
  // for password
  const isPasswordCorrect = await comparePassword(req.body.password,user.password)
//  if(!isPasswordCorrect) throw new UnauthorizedError('invalid password');
if(!isPasswordCorrect){
  res.status(401).json({msg:"Invalid password"});
}
 
// creating JWT
const token =createJWT({userId:user._id,role:user.role});

const oneDay = 1000 * 60 * 60 * 24;
//CREATING COOKEIE WITH JWT(token)
res.cookie('token', token, {
  httpOnly: true,
  expires: new Date(Date.now() + oneDay),
  secure: process.env.NODE_ENV === 'production',
});

res.status(StatusCodes.CREATED)
.json({ msg: 'user logged in' });

}


export const logout = (req, res) => {
  res.cookie('token', 'token', {
    httpOnly: true,
    expires:new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out' });
}

