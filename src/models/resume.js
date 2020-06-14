const mongoose = require("mongoose");

const resumeSchema = mongoose.Schema({
  title: { type: String, required: true, minlength: 4 },
  description: { type: String },
  date: {
    type: Date,
    required: true,
  },
  likes: { type: Number, default: 0 },
  data: { type: String }, //TODO: Use buffer type
  tags: [
    {
      type: String,
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Resume", resumeSchema);
