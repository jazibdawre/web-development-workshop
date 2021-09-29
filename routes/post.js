const express = require("express");
const asyncHandler = require("express-async-handler");

const { createPost, deletePost, updatePost, getUserPosts } = require("../controllers/post");

const router = express.Router();

router.post("/create-post", asyncHandler(createPost));
router.delete("/post", asyncHandler(deletePost));
router.put("/post", asyncHandler(updatePost));
router.get("/posts", asyncHandler(getUserPosts));


module.exports = router;