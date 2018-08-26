import ApolloClient from 'apollo-boost'
import gql from "graphql-tag";

const Actions = {
    FETCH_GIPHY: 'fetch_giphy',
    FETCH_GIPHY_SUCCESS: 'fetch_giphy_success',
    FETCH_GIPHY_FAILUTRE: 'fetch_giphy_failure',
}


const initialState = {
    giphyFetchState: '',
    results: [],
}

const apolloClient = new ApolloClient({
    uri: 'https://www.graphqlhub.com/graphql',
})

////////////////
//  Selectors //
////////////////
export const getGiphyFetchState = (state) => state.giphyFetchState;
export const getGiphyResults = (state) => state.results;

///////////////
//  Reducer  //
///////////////
export default (state = initialState, action) => {
    switch(action.type) {
    case Actions.FETCH_GIPHY:
        return {
            ...state,
            giphyFetchState: 'started',
        }
    case Actions.FETCH_GIPHY_SUCCESS:
        return {
            ...state,
            giphyFetchState: 'complete',
            results: action.payload.results,
        }
    case Actions.FETCH_GIPHY_FAILUTRE:
        return {
            ...state,
            giphyFetchState: 'error',
        }
    default:
      return state;
    }
}

///////////////////////
//  Action Creators  //
///////////////////////
export const getGiphy = (search) => {
    apolloClient.query({
        query: gql`
          query GiphyGifs($query: String!) {
            giphy {
              search(query: $query, limit: 10) {
                id
                url
                images {
                  original {
                    url
                  }
                }
              }
            }
          }
        `,
        variables: {
          query: search,
        },
      })
}
