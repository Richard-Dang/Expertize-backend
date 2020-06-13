const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    minlength: 5,
  },
  resumes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
    },
  ],
  profession: { type: String },
  phone: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  education: [
    {
      school: {
        name: String,
      },
      major: {
        name: String,
      },
    },
  ],
});

userSchema.set("toJSON", {
  transform: (doc, obj) => {
    obj.id = obj._id.toString();
    delete obj._id;
    delete obj.__v;
    delete obj.password;
  },
});

mongoose.model("User", userSchema);
