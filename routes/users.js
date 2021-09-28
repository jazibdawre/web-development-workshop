const express = require("express");
const asyncHandler = require("express-async-handler");

const { register, getUsers, getUserById } = require("../controllers/userController");

const router = express.Router();

router.post("/signup", asyncHandler(register));

router.get("/", asyncHandler(getUsers));
router.get("/:id", asyncHandler(getUserById));

module.exports = router;
