const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter a name"],
		},
		email: {
			type: String,
			unique: true,
			required: [true, "Enter a unique email"],
		},
		password: {
			type: String,
			required: [true, "Password is required"],
		},
		role: {
			type: String,
			enum: ["user", "admin"],
			default: "user",
		},
	},
	{ timestamps: true }
);

UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}

	const salt = await bcrypt.genSalt(parseInt(process.env.HASH_SEED));
	this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);
