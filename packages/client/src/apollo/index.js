import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
});

const withApolloClient = Children => (
  <ApolloProvider client={client}>
    <Children />
  </ApolloProvider>
);

export default withApolloClient;
