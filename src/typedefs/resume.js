const { gql } = require("apollo-server");

exports.Resume = gql`
  type Resume {
    title: String!
    date: String!
    likes: Int!
    data: String!
    description: String
    tags: [String]
    user: User!
    id: ID!
  }
`;
