// import { ApolloServer, gql } from "apollo-server-lambda";

// const typeDefs = gql`
//   type Query {
//     greeting: String
//   }
// `;

// const resolvers = {
//   Query: {
//     greeting: () => "Hello there!"
//   }
// };

// export default new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ event, context }) => ({
//     headers: event.headers,
//     functionName: context.functionName,
//     event,
//     context
//   })
// });
export const schema = `
  type Query {
    greeting: String
  }

  schema {
    query: Query
  }
`;
