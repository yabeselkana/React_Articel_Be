const express = require("express");
const router = express.Router();
const articlesController = require("../controller/articles");
// const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/upload");
// const { hitCacheProductDetail, clearCacheProductDetail } = require("../middlewares/redis");
// const { validate, myCors } = require("../middlewares/common");

router
  .get("/", articlesController.getAllArticles)
  .get("/search/", articlesController.getSearchArticles)
  .get("/:id", articlesController.getDetailArticles)
  .post("/", upload, articlesController.createArticles)
  .put("/:id", upload, articlesController.updateArticles)
  .delete("/:id", articlesController.deleteArticles);

module.exports = router;
