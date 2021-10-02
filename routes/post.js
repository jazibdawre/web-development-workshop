const express = require("express");
const asyncHandler = require("express-async-handler");
const auth = require('../middleware/auth')

const { createPost, deletePost, updatePost, getUserPosts } = require("../controllers/post");

const router = express.Router();

router.post("/create-post", auth, asyncHandler(createPost));
router.delete("/post", auth, asyncHandler(deletePost));
router.put("/post", auth, asyncHandler(updatePost));
router.get("/posts", auth, asyncHandler(getUserPosts));


module.exports = router;