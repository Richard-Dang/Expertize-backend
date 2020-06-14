const User = require("../../models/user");
const { UserInputError } = require("apollo-server-express");
const bcrypt = require("bcrypt");

const signup = async (root, args) => {
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(args.password, saltRounds);

  try {
    const user = new User({ ...args, password: passwordHash });
    return await user.save();
  } catch (error) {
    throw new UserInputError(error.message);
  }
};

module.exports = signup;
