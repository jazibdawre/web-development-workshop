const Post = require("../models/post");

exports.createPost = async (req, res) => {
	const post = new Post({...req.body,
        user: req.user._id,
    });
    const new_post = await post.save()
	res.status(200).json(new_post);
};

exports.updatePost = async (req, res) => {
    const {
        title,
        description,
      } = req.body
      const post = await Post.findById(req.params.id)
      if (post) {
        post.title = title
        post.description = description    
        const updatedPost = await post.save()
        res.json(updatedPost);
      } else {
        res.status(404)
        throw new Error('Product not found')
      }
};

exports.deletePost = async (req, res) => {
	const post = await Post.findById(req.params.id)
    if (product) {
        await post.remove()
        res.json({ message: 'Product removed' })
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
};

exports.getUserPosts = async (req, res) => {
	const posts = await Post.find({user: req.user.id})
    res.status(200).json(posts);
};

exports.getAllPosts = async (req, res) => {
	const posts = await Post.find()
    res.status(200).json(posts);
};


// if user access to posts 
// then create, edit , delete
// get posts by user