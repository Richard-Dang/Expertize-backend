const { User } = require("./user");
const { Education } = require("./education");
const { Resume } = require("./resume");
const { AuthData } = require("./authdata");
const { Query } = require("./query");
const { Mutation } = require("./mutation");

const typeDefs = [User, Education, Resume, AuthData, Query, Mutation];

module.exports = typeDefs;
