import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';

const cache = new InMemoryCache();

const GIPHY_BASE_URL = 'https://www.graphqlhub.com/graphql';

const httpLink = new HttpLink({
  uri: GIPHY_BASE_URL,
});

const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})

render(
    <ApolloProvider client={apolloClient}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
registerServiceWorker();
