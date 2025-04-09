import express from 'express';
import {
  getEvent,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventByCategory,
  getEventByDate,
  getEventByLocation
} from '../../controller/eventController.js';

const router = express.Router();

router.route('/')
    .get(getEvent) 
    .post(createEvent); 

router.route('/:id')
    .get(getEventById) 
    .put(updateEvent) 
    .delete(deleteEvent); 

router.route('/category/:category')
    .get(getEventByCategory);
router.route('/date/:date')
    .get(getEventByDate); 
router.route('/location/:location')
    .get(getEventByLocation); 

export default router;
