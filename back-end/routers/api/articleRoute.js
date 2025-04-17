import express from 'express';
import {
    getArticle,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
    getArticleByCategory,
} from '../../controller/articleController.js';

import { authenticate, authorizeRoles } from '../../middleware/authMiddleware.js';

const router = express.Router();

// Public routes (accessible by all authenticated users)
router.route('/')
    .get(authenticate, getArticle);

// Admin-only routes
router.route('/')
    .post(authenticate, authorizeRoles('admin'), createArticle);

router.route('/:id')
    .get(authenticate, getArticleById)
    .put(authenticate, authorizeRoles('admin'), updateArticle)
    .delete(authenticate, authorizeRoles('admin'), deleteArticle);

// Public route: filter articles by category
router.route('/category/:category')
    .get(authenticate, getArticleByCategory);

export default router;
