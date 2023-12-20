// /src/client.js
import { ApolloClient, InMemoryCache } from "@apollo/client";

// Create the http link
const APIUri = "https://api.github.com/graphql";
const token = process.env.REACT_APP_GITHUB_TOKEN;

// Generate your client with the authLink and httpLink
export const client = new ApolloClient({
  uri: APIUri,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${token}`,
  },
});
