import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
// //https://gjt7vbqrw5.execute-api.us-east-1.amazonaws.com/dev/graphql

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
});

const withApolloClient = Children => (
  <ApolloProvider client={client}>
    <Children />
  </ApolloProvider>
);

export default withApolloClient;
