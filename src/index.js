const app = require("./app");
const config = require("./utils/config");
const resolvers = require("./resolvers");
const typeDefs = require("./typedefs");
const { ApolloServer } = require("apollo-server-express");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // playground: true,
});

server.applyMiddleware({ app });

app.listen(config.PORT, () =>
  console.log(
    `Server ready at http://localhost:${config.PORT}${server.graphqlPath}`
  )
);
