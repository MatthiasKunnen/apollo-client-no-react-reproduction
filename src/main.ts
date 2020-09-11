import {ApolloClient, InMemoryCache} from '@apollo/client/core';

const client = new ApolloClient({
    cache: new InMemoryCache(),
});
