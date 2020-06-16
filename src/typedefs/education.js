const { gql } = require("apollo-server-express");


exports.Education = gql`
   type Education {
     school: String
     major: String
   }
`;
