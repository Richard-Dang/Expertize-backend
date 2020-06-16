const { gql } = require("apollo-server");

exports.AuthData = gql`
  type AuthData {
    token: String!
    currentUser: User!
  }
`;
