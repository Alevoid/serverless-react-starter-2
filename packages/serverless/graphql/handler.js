import apolloServer from "./schema";

export const graphqlHandler = apolloServer.createHandler({
  cors: {
    origin: true,
    credentials: true
  }
});
