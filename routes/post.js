const express = require("express");
const asyncHandler = require("express-async-handler");
const { auth } = require("../middleware/auth");

const { createPost, deletePost, updatePost, getUserPosts } = require("../controllers/post");

const router = express.Router();

router.get("/", auth, asyncHandler(getUserPosts));
router.put("/:id", auth, asyncHandler(updatePost));

router.post("/create-post", auth, asyncHandler(createPost));
router.delete("/:id", auth, asyncHandler(deletePost));

module.exports = router;
