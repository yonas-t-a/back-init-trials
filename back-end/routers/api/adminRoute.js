import express from 'express';

import {
    getAdmin,
    getAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin
} from '../../controller/adminController.js'
const router = express.Router();
router.route('/')
    .get(getAdmin)
    .post(createAdmin);
router.route('/:id')
    .get(getAdminById)
    .put(updateAdmin)
    .delete(deleteAdmin);
export default router;