const { gql } = require("apollo-server-express");

exports.AuthData = gql`
  type AuthData {
    token: String!
    currentUser: User!
  }
`;
