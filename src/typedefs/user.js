const { gql } = require("apollo-server-express");

exports.User = gql`
  type User {
    email: String!
    password: String!
    name: String!
    username: String!
    resumes: [Resume]
    profession: String
    phone: String
    linkedin: String
    education: [Education]
    id: ID!
  }
`;
