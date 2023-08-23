import mongoose from 'mongoose';

const jobsquad = new mongoose.Schema(
  { 
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'internship'],
      default: 'full-time',
    },
    jobLocation: {
      type: String,
      default: 'my city',
    },
    createdBy:{
      type:mongoose.Types.ObjectId,
      ref:'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model('jobsquad', jobsquad);


// //   "name": "ejaz",
//   "email": "ejaz11@gmail.com",
// "password": "ejaz@123",

// "name": "jazir",
// "email": "jazir11@gmail.com",
// "password": "jazir@123",