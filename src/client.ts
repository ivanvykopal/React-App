import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from "@apollo/client/link/ws";

export const createApolloClient = () => {
    return new ApolloClient({
        link: new WebSocketLink({
            uri: 'wss://chief-terrier-94.hasura.app/v1/graphql',
            options: {
                reconnect: true,
                connectionParams: {
                    headers: {
                        'x-hasura-admin-secret': 'text'
                    }
                }
            }
        }),
        cache: new InMemoryCache(),
    });
};