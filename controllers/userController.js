const User = require("../models/userModel");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

exports.getUsers = async (req, res) => {
	const users = await User.find();
	res.status(200).json(users);
};

exports.getUserById = async (req, res) => {
	const user = await User.findById(req.params.id);
	if (!user) return res.status(404).json("No user found");
	res.status(200).json(user);
};

exports.register = async (req, res) => {
	const user = await User.create(req.body);
	res.status(200).json(user);
};

exports.login = async (req, res) => {
	const { email, password } = req.body;
	let user = await User.findOne({ email });
	if (!user) {
		return res.status(400).json({
			msg: 'Bad credentials'
		})
	}
	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
        return res.status(400).json({
            msg: 'Incorrect password entered'
        });
    }

	const payload = {
		user: {
			id: user._id
		}
	}

	const token = jwt.sign(payload,
		process.env.JWT_KEY
	);

	return res.status(200).json({
		message: "Authorization successful",
		token: token,
		id: user._id
	});
	
};
