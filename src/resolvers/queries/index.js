const Users = require("../../models/user");
const Resume = require("../../models/resume");

const resumeCount = async () => await Resume.countDocuments({});
const allResumes = async () => await Resume.find({}).populate("user");
const allUsers = async () => await Users.find({}).populate("resume");
const currentUser = (root, args, { currentUser }) => currentUser;

module.exports = {
  resumeCount,
  allResumes,
  allUsers,
  currentUser,
};
