const express = require("express");
const path = require("path");
const usersController = require("../controllers/users");
const router = express.Router();

router.get("/signin", usersController.getSignIn);

router.get("/getsignup", usersController.getSignUp);

router.post("/getsignin", usersController.postSignIn);

// router.post("/signup",usersController.postSignUp);

module.exports = router;
