const db = require("../db/dbConfig")

const getAllArticles = async () => {
    try {
        const allArticles = await db.any("SELECT * FROM articles");
        console.log(allArticles);
        return allArticles
    } catch (error) {
        return error 
    }
};

const getArticlesById = async (id) => {
    try {
        const article = await db.any(`SELECT * FROM articles WHERE id=$1`, id)
        console.log(article);
        return article
    } catch (error) {
        return error
    }
}

const createArticle = async (article) => {
    try {
        const newArticle = await db.one(`INSERT INTO articles (name, size, gender, category, color, discription, condition, price, url) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`, 
        [article.name, article.size, article.gender, article.category, article.color, article.discription, article.condition, article.price, article.url])
        return newArticle
    } catch (error) {
        return error
    }
}

const deleteArticleById = async (id) => {
    try {
       const deleteArticle = await db.any("DELETE FROM articles WHERE id= $1 RETURNING *", id)
       return deleteArticle

    } catch (error) {
        return error
    }
}

const updateArticleById = async (id, article) => {
    try {
      let dynamicValues = Object.values(article);
  
      function makeQueryString(data) {
        let count = 2;
        let result = "";
  
        for (let key in data) {
          result += `${key} = $${count},`;
          count++;
        }
        result = result.substring(0, result.length - 1);
        return result;
      }
  
      let queryString = makeQueryString(article);
  
      const updatedArticle = await db.any(
        `UPDATE articles SET ${queryString} WHERE id = $1 RETURNING *`,
        [id, ...dynamicValues]
      );
      return updatedArticle;
    } catch (error) {
      return error;
    }
  };


module.exports = {
    getAllArticles,
    getArticlesById,
    createArticle,
    deleteArticleById,
    updateArticleById
}