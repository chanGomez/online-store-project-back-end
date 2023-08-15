const db = require("../db/dbConfig");

const getAllComments = async (articleId) => {
  try {
    const allComments = await db.any(
      `SELECT * FROM comments where article_id = $1 ORDER BY id ASC`,
      articleId
    );

    return allComments;
  } catch (error) {
    return error;
  }
};

const getCommentById = async (articleId, commentId) => {
    try {
      const oneComment = await db.any(
        `
          SELECT ARTICLE_ID,
              COMMENTER,
              CONTENT
          FROM ARTICLES
          JOIN COMMENTS ON ARTICLES.ID = COMMENTS.ARTICLE_ID
          WHERE ARTICLES.ID = $1
              AND COMMENTS.ID = $2;
      `,
        [articleId, commentId]
      );
  
      return oneComment;
    } catch (error) {
      return error;
    }
  };

  const deleteCommentById = async (id) => {
    try {
      const deleteComment = await db.any(
        `DELETE FROM comments WHERE id = $1 RETURNING *`,
        id
      );
  
      return deleteComment;
    } catch (error) {
      return error;
    }
  };

  const createComment = async (comment) => {
    try {
      const newComment = await db.any(
        `INSERT INTO comments (article_id, commenter, content) VALUES ($1, $2, $3) RETURNING *`,
        [
            comment.article_id,
            comment.commenter,
            comment.content
        ]
      );
  
      return newComment;
    } catch (error) {
      return error;
    }
  };

  const updateCommentById = async (id, comment) => {
    let { commenter, content} = comment;
    try {
      const updatedComments = await db.any(
        `UPDATE comments SET commenter = $1, content = $2 WHERE id = $3 RETURNING *`,
        [commenter, content, id]
      );
  
      return updatedComments;
    } catch (error) {
      return error;
    }
  };

  //last one works on these
  // localhost:3001/comments/3/get-all-comments
  // localhost:3001/articles/3/comments/3/get-all-comments
  const getAllCommentsOnArticleId = async (article_id) => {
    try {
  
      const allComments = await db.any(
        `SELECT * FROM articles INNER JOIN comments ON comments.article_id = articles.id WHERE comments.article_id = $1`,
        article_id
      );

      return allComments;
    } catch (error) {
      return error;
    }
  };
  

module.exports = {
    getAllComments,
    getCommentById,
    deleteCommentById,
    createComment,
    updateCommentById,
    getAllCommentsOnArticleId
  };