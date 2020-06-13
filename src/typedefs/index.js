const { gql } = require("apollo-server");

const typeDefs = gql`
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

  type Education {
    school: String
    major: String
  }

  type Resume {
    title: String!
    description: String!
    date: String!
    likes: Int!
    data: String
    tags: [String]
    user: User!
    id: ID!
  }

  type AuthData {
    token: String!
    username: String!
  }

  type Query {
    resumeCount: Int!
    allResumes: [Resume!]!
    allUsers: [User!]!
  }

  type Mutation {
    addResume(
      title: String!
      description: String!
      data: String
      tags: [String]
    ): Resume
    signup(username: String!, password: String!): User
    login(username: String!, password: String!): AuthData
  }
`;

module.exports = typeDefs;
