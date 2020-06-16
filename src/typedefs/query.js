const { gql } = require("apollo-server-express");


exports.Query = gql`
  type Query {
    resumeCount: Int!
    allResumes: [Resume!]!
    allUsers: [User!]!
    currentUser: User
  }
`;
