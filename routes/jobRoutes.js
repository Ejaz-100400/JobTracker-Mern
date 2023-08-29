// Separating the CRUD operations on Routes
import { Router } from "express";
const router = Router();

import {getAllJobs,getJob,updateJob,removeJob,createJob,showStats} from  '../controllers/jobController.js';
import { validateJobInput,validateIdParam } from "../middleware/validatemiddleware.js";



router.route('/').get(getAllJobs).post(validateJobInput,createJob);
router.route('/stats').get(showStats);
router.route('/:id').get(validateIdParam,getJob).patch(validateJobInput,validateIdParam,updateJob).delete(validateIdParam,removeJob)

export default router;