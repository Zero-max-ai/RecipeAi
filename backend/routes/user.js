const express = require("express");
const { jwtSignUp, jwtVerify } = require("../middleware/userAuth.js");
const router = express.Router();

// @desc - Login Route
// @access - Public
// @return - jwt-token
router.post("/login", jwtVerify, (req, res) => {
  res.cookie("GPT-Clone", req.userToken, {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60),
    httpOnly: true,
  });
  res.status(200).json({ message: req.userToken });
});

// @desc - SignUp Route
// @access - Public
// @returm - nothing
router.post("/signup", jwtSignUp, (req, res) => {
  res.status(201).json({ message: "New Account Created. Try Login!" });
});

module.exports = router;
