const mongoose = require("mongoose");

const resumeSchema = mongoose.Schema({
  title: { type: String, required: true, minlength: 5 },
  description: { type: String },
  date: {
    type: Date,
    required: true,
  },
  likes: { type: Number },
  data: { type: Buffer },
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

resumeSchema.set("toJSON", {
  transform: (doc, obj) => {
    obj.id = obj._id.toString();
    delete obj._id;
    delete obj.__v;
  },
});

module.exports = mongoose.model("Resume", resumeSchema);
