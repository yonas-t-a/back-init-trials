import express from 'express';

import {
    getArticle,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
    getArticleByCategory,

} from '../../controller/articleController.js';

const router = express.Router();
router.route('/')
    .get(getArticle)
    .post(createArticle);
router.route('/:id')
    .get(getArticleById)
    .put(updateArticle)
    .delete(deleteArticle);
router.route('/category/:category')
    .get(getArticleByCategory);

export default router;