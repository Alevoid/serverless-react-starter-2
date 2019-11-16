import { ApolloServer, gql } from "apollo-server-lambda";

const greeting = gql`
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => "Hello there!"
  }
};

export default new ApolloServer({
  typeDefs: greeting,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  })
});
