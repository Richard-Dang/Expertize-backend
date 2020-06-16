const app = require("./app");
const config = require("./utils/config");
const resolvers = require("./resolvers");
const typeDefs = require("./typedefs");
const { ApolloServer, AuthenticationError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
const User = require("./models/user");

const context = async ({ req }) => {
  const auth = req ? req.headers.authorization : null;
  if (auth && auth.toLowerCase().startsWith("bearer ")) {
    try {
      const { userId } = jwt.verify(auth.substring(7), config.JWT_SECRET);
      const currentUser = await User.findById(userId);
      return { currentUser };
    } catch (error) {
      throw new AuthenticationError("Not authenticated");
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.applyMiddleware({ app });

app.listen(config.PORT, () =>
  console.log(
    `Server ready at http://localhost:${config.PORT}${server.graphqlPath}`
  )
);
