const express = require("express");
const router = express.Router();
const ArticlestRouter = require("../routes/articles");
const CatagoryRouter = require("../routes/catagorys");
const UsersRouter = require("./users");

router.use("/articles", ArticlestRouter);
router.use("/catagorys", CatagoryRouter);
router.use("/users", UsersRouter);

module.exports = router;
