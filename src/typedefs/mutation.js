const { gql } = require("apollo-server");

exports.Mutation = gql`
  type Mutation {
    addResume(
      title: String!
      description: String
      data: String!
      tags: [String]
    ): Resume
    signup(
      username: String!
      password: String!
      name: String!
      email: String!
    ): AuthData
    login(email: String!, password: String!): AuthData
  }
`;
