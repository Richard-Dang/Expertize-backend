const Resume = require("../../models/resume");
const {
  UserInputError,
  AuthenticationError,
} = require("apollo-server-express");

const addResume = async (root, args, { currentUser }) => {
  if (!currentUser) {
    throw new AuthenticationError("Not authenticated");
  }

  try {
    const resume = new Resume({
      ...args,
      user: currentUser._id,
      date: new Date(),
    });
    return await resume.save();
  } catch (error) {
    throw new UserInputError(error.message);
  }
};

module.exports = addResume;
