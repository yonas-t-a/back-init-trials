import articleModel from "../model/article.js";
import path from 'path';

export async function getArticle(req, res) {
    try {
        const articles = await articleModel.getArticle();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: "Error fetching articles" });
    }
}
export async function getArticleById(req, res) {
    const { id } = req.params;
    try {
        const article = await articleModel.getArticleById(id);
        if (!article) {
            return res.status(404).json({ error: "Article not found" });
        }
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ error: "Error fetching article" });
    }
}
export async function createArticle(req, res) {
    const { title, content, category } = req.body;
    const img = req.file ? `/images/${req.file.filename}` : null; // Get the uploaded image path

    if (!title || !content || !category) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const newArticle = { title, content, category, img };
        const result = await articleModel.createArticle(newArticle);
        res.status(201).json({ id: result.insertId, ...newArticle });
    } catch (error) {
        res.status(500).json({ error: "Error creating article" });
    }
}
export async function updateArticle(req, res) {
    const { id } = req.params;
    const { title, content, category } = req.body;
    const img = req.file ? `/images/${req.file.filename}` : null; // Get the uploaded image path

    if (!title || !content || !category) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const updatedArticle = { title, content, category, img };
        const result = await articleModel.updateArticle(id, updatedArticle);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Article not found" });
        }
        res.status(200).json({ id, ...updatedArticle });
    } catch (error) {
        res.status(500).json({ error: "Error updating article" });
    }
}
export async function deleteArticle(req, res) {
    const { id } = req.params;
    try {
        const result = await articleModel.deleteArticle(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Article not found" });
        }
        res.status(200).json({ message: "Article deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting article" });
    }
}
export async function getArticleByCategory(req, res) {
    const { category } = req.params;
    try {
        const articles = await articleModel.getArticleByCategory(category);
        if (articles.length === 0) {
            return res.status(404).json({ error: "No articles found in this category" });
        }
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: "Error fetching articles by category" });
    }
}