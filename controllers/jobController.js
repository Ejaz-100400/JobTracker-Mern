// Writing the code logics
import jobsquad from '../models/jobmodels.js'
import StatusCodes from 'http-status-codes'
import day from 'dayjs'
import mongoose from 'mongoose'

// GET ALL JOBS
export const getAllJobs = async (req,res)=>{
    // console.log(req)
    const job = await jobsquad.find({createdBy: req.user.userId})
    // console.log(req)
    res.status(200).json({job})
}

// CREATE JOB
export const createJob = async(req,res)=>{
    req.body.createdBy=req.user.userId;
    // console.log(req)
    const job = await jobsquad.create(req.body);
    res.status(StatusCodes.CREATED).json({ job });
}

// GET SINGLE JOB
export const getJob = async (req, res) => {
    const { id } = req.params;
    const job = await jobsquad.findById(id);
    res.status(200).json({ job });
  };


// UPDATE A JOB
export const updateJob=async(req,res)=>{
    const {id}=req.params
    const updatedjob= await jobsquad.findByIdAndUpdate(id,req.body,{
        new:true,
    });
    res.status(200).json({msg:'Job modified',updatedjob });
}

// DELETE A JOB
export const removeJob = async(req,res)=>{
    const {id}=req.params
    const removeJob = await jobsquad.findByIdAndDelete(id)
    res.status(200).json({msg:'Job Deleted',job:removeJob});
}

// SHOW STATS
export const showStats = async (req, res) => {
    let stats = await jobsquad.aggregate([
      { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
      { $group: { _id: '$jobStatus', count: { $sum: 1 } } },
    ]);
    stats = stats.reduce((acc, curr) => {
      const { _id: title, count } = curr;
      acc[title] = count;
      return acc;
    }, {});
  
    const defaultStats = {
      pending: stats.pending || 0,
      interview: stats.interview || 0,
      declined: stats.declined || 0,
    };
  
    let monthlyApplications = await jobsquad.aggregate([
      { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
      {
        $group: {
          _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
          count: { $sum: 1 },
        },
      },
      { $sort: { '_id.year': -1, '_id.month': -1 } },
      { $limit: 6 },
    ]);
    monthlyApplications = monthlyApplications
      .map((item) => {
        const {
          _id: { year, month },
          count,
        } = item;
  
        const date = day()
          .month(month - 1)
          .year(year)
          .format('MMM YY');
        return { date, count };
      })
      .reverse();
  
    res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
  };