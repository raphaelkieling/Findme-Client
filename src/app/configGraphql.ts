import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

class AppModule {
    constructor(
        apollo: Apollo,
        httpLink: HttpLink
    ) {
        apollo.create({
            // By default, this client will send queries to the
            // `/graphql` endpoint on the same host
            link: httpLink.create({ uri: 'http://localhost:3000/graphql' }),
            cache: new InMemoryCache()
        });
    }
}