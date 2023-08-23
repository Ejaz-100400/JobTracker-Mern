import { Router } from "express";
const router = Router();

import { getCurrentUser,getApplicationStats,updateUser } from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validatemiddleware.js";
import {
    authorizePermissions,
    // checkForTestUser,
  } from '../middleware/authMiddleware.js';


router.get('/current-user',getCurrentUser);
router.get('/admin/app-stats',[
    authorizePermissions('admin'),
    getApplicationStats]);

router.patch('/update-user',
// checkForTestUser,
validateUpdateUserInput,updateUser);


export default router;

