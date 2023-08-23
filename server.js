import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

//routers
import jobRouter from './routes/jobRoutes.js'
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js'

//error middleware
import errorHandleMiddleware from './middleware/errorhandlemiddleware.js';
// import { validateJobInput } from './middleware/validatemiddleware.js';
import {authenticateUser} from './middleware/authMiddleware.js';


app.use(express.json());
app.use(morgan('dev'))
app.use(cookieParser());

// EXPRESS VALIDATOR SHOULD PRESENT IN TOP OF CONTROLLER
// app.post('/api/v1/test',validateJobInput,
// (req, res) => {
//     const {name}=req.body;
//     res.json({message:`Hello ${name}`});
// });


app.get('/api/v1/test', (req, res) => {
    res.status(200).json({ msg: 'test route' });
  });

// ROUTER FOR JOBCONTROLLER AND AUTHENTICATOR(jobsquad api)
app.use('/api/v1/jobs',authenticateUser,jobRouter);
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/user',authenticateUser,userRouter);


//NOT FOUND MIDDLEWARE
app.use(errorHandleMiddleware);

// if(process.env.NODE_ENV === 'production'){
//     app.use(morgan('dev'))
// }

const port = process.env.PORT || 5100


try{
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port,()=>{
        console.log(`listening on ${port}`);
    })
}catch(error){
    console.log(error);
    process.exit(1);
}
