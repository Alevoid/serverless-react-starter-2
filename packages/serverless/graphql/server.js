import { ApolloServer } from "apollo-server-lambda";

import { schema } from "./schema";
import { resolvers } from "./resolvers";

export default new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  })
});
