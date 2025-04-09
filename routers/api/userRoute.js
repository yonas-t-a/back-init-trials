import express from 'express';

import {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../../controller/userController.js';

const router = express.Router();

router.route('/')
    .get(getUser)
    .post(createUser);
router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);