const { gql } = require("apollo-server");

exports.Query = gql`
  type Query {
    resumeCount: Int!
    allResumes: [Resume!]!
    allUsers: [User!]!
  }
`;
