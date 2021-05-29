import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);
export const client = new ApolloClient({
    uri:    
        process.env.NODE_ENV === "production"
            ? "https://instaclone-b.herokuapp.com/graphql"
            : "http://localhost:4000/graphql",
    cache: new InMemoryCache()
})