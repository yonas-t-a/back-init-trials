import express from 'express';
import {
  getUserEvent,
  getUserEventById,
  createUserEvent,
  updateUserEvent,
  deleteUserEvent
} from '../../controller/userEventController.js';

const router = express.Router();
router.route('/')
    .get(getUserEvent)
    .post(createUserEvent);

router.route('/:id')
    .get(getUserEventById)
    .put(updateUserEvent)
    .delete(deleteUserEvent);

export default router;