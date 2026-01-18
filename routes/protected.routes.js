const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/jwt.middleware");

router.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: `Hoşgeldin ${req.user.email}` });
});

module.exports = router;
