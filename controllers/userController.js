import jobsquad from '../models/jobmodels.js'
import User from '../models/usermodels.js'
import StatusCodes from 'http-status-codes'

// export const getACurrentUser = async (req,res)=>{
//     const user =await User.findOne({_id:req});
//     console.log(user);
//     res.status(StatusCodes.OK).json({user})
// }
export const getCurrentUser = async (req, res) => {
    // const{id}=req.body
    const user = await User.findOne({_id:req.user.userId})
    // console.log(user)
    // To get user without password
    const userWithoutPassword= user.toJSON()
    res.status(StatusCodes.OK).json({user:userWithoutPassword})
  };

export const getApplicationStats = async (req,res)=>{
  const users = await User.countDocuments();
  const jobs = await jobsquad.countDocuments();
  res.status(StatusCodes.OK).json({ users, jobs });
}

export const updateUser = async (req,res)=>{
    const updatedUser = await User.findByIdAndUpdate(req.user.userId,req.body)
    // console.log(updatedUser);
    res.status(StatusCodes.OK).json(updatedUser)
}
