const User = require("../../models/user");
const { UserInputError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
const config = require("../../utils/config");
const bcrypt = require("bcrypt");

const login = async (root, { email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new UserInputError("Invalid credentials");
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    throw new UserInputError("Invalid credentials");
  }

  const token = jwt.sign(
    { username: user.username, id: user._id },
    config.JWT_SECRET
  );

  return {
    token,
    username: user.username,
  };
};

module.exports = login;
