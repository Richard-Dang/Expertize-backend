const User = require("../../models/user");
const { UserInputError } = require("apollo-server-express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../utils/config");

const signup = async (root, args) => {
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(args.password, saltRounds);

  try {
    const user = new User({ ...args, password: passwordHash });
    await user.save();
    const token = jwt.sign({ userId: user._id }, config.JWT_SECRET);

    return {
      token,
      currentUser: user,
    };
  } catch (error) {
    throw new UserInputError(error.message);
  }
};

module.exports = signup;
