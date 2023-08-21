// Writing the code logics
import jobsquad from '../models/jobmodels.js'

// GET ALL JOBS
export const getAllJobs = async (req,res)=>{
    // console.log(req)
    const job = await jobsquad.find({})
    res.status(200).json({job})
}

// CREATE JOB
export const createJob = async(req,res)=>{
    const { company, position } = req.body;
    try{
        const job = await jobsquad.create({company:company, position:position})
        res.status(201).json({ job });
    }
    catch(error){
        res.status(500).json({msg:'Something went wrong'})
    }
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