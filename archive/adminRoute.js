import express from 'express';

import {
    getAdmin,
    getAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin
} from '../back-end/controller/adminController.js'
import { protect, restrictTo } from '../back-end/controller/authController.js';
const router = express.Router();

router.use(protect, restrictTo('admin'));

router.route('/')
    .get(getAdmin)
    .post(createAdmin);
router.route('/:id')
    .get(getAdminById)
    .put(updateAdmin)
    .delete(deleteAdmin);
export default router;