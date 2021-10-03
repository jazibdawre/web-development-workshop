const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
	{
		user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        title: {
            type:String,
            required:true,
        },
        description: {
            type:String,
            required:true,
        }

	},
	{ timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);