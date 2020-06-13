const morgan = require("morgan");

const queryLogger = () => {
  morgan.token("graphql-query", (req) => {
    const { query, variables, operationName } = req.body;

    return `GRAPHQL: \nOperation Name: ${operationName} \nQuery: ${query} \nVariables: ${JSON.stringify(
      variables
    )}`;
  });

  return morgan(":graphql-query", {
    skip: (req, res) => {
      const { operationName } = req.body;
      return !operationName || operationName === "IntrospectionQuery";
    },
  });
};

module.exports = queryLogger;
