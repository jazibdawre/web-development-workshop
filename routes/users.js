const express = require("express");
const asyncHandler = require("express-async-handler");
const auth = require('../middleware/auth')

const { register, getUsers, getUserById } = require("../controllers/userController");

const router = express.Router();

router.post("/signup", asyncHandler(register));

router.get("/", auth, asyncHandler(getUsers));
router.get("/:id", auth, asyncHandler(getUserById));

module.exports = router;
