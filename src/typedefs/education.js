const { gql } = require("apollo-server");

exports.Education = gql`
   type Education {
     school: String
     major: String
   }
`;
