var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// GET MENU PAGE
router.get("/menu", function (req, res, next) {
  res.render("menu", { title: "Express" });
});

// GET ABOUT PAGE
router.get("/about", function (req, res, next) {
  res.render("about", { title: "Express" });
});

// GET CONTACT PAGE
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Express", message: "" });
});

router.post("/contact", function (req, res, next) {
  console.log(req.body);
});

module.exports = router;
