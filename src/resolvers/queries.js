const User = require("../models/user");
const Resume = require("../models/resume");

const resumeCount = async () => await Resume.countDocuments({});
const allResumes = async () => await Resume.find({}).populate("user");
const allUsers = async () => await User.countDocuments({});

module.exports = {
  resumeCount,
  allResumes,
  allUsers,
};
