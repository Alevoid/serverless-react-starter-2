import server from "./server";

export const graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true
  }
});
