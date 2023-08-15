const express = require("express");
const router = express.Router();

const commentsControllers = require("./commentsControllers");

router.use("/:articleId/comments", commentsControllers);

const {
  getAllArticles,
  getArticlesById,
  createArticle,
  deleteArticleById,
  updateArticleById,
} = require("../queries/articles");

router.get("/", async (req, res) => {
  const allArticles = await getAllArticles();
  console.log(allArticles);
  if (Array.isArray(allArticles)) {
    res.json(allArticles);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const article = await getArticlesById(id);

  if (article.length === 0) {
    res.status(500).json({ error: "Article not found!" });
  } else {
    res.status(200).json(article[0]);
  }
});

router.post("/", async (req, res) => {
  const article = await createArticle(req.body);
  res.json(article);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deleteArticle = await deleteArticleById(id);

  if (deleteArticle.length === 0) {
    res.status(400).json({ error: "Bookmark not found!" });
  } else {
    res.json(deleteArticle[0]);
  }
});

router.put("/:id", async (req, res) => {
  const updatedArticle = await updateArticleById(req.params.id, req.body);

  if (updatedArticle.length === 0) {
    res.status(404).json({ message: "Not found!", error: true });
  } else {
    res.json(updatedArticle[0]);
  }
});

module.exports = router;
