import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import { AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Cookbooks, Cookbook, Recipe, Header } from './containers';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

const Navigator = StackNavigator(
  {
    Cookbooks: {
      screen: Cookbooks,
      navigationOptions: {
        header: ({ state }) => ({
          backTitle: 'Cookbooks',
          title: <Header.Cookbooks data={{ header: { title: 'Cookbooks' } }} />,
        }),
      },
    },
    Cookbook: {
      screen: Cookbook,
      navigationOptions: {
        header: ({ state }) => ({
          backTitle: 'Cookbook',
          title: <Header.Cookbook id={state.params.cookbook._id} />,
        }),
      },
    },
    Recipe: {
      screen: Recipe,
      navigationOptions: {
        header: ({ state }) => ({
          title: <Header.Recipe id={state.params.recipe._id} />,
        }),
      },
    },
  },
  { initialRouteName: 'Cookbooks' }
);

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graphcms.com/simple/v1/cj0dvo3joqg34012777obq6td',
  }),
});

const navReducer = (state, action) => {
  const newState = Navigator.router.getStateForAction(action, state);
  return newState || state;
};

const store = createStore(
  combineReducers({
    apollo: client.reducer(),
    nav: navReducer,
  }),
  {}, // initial state
  compose(
    applyMiddleware(client.middleware()),
    // If you are using the devToolsExtension, you can add it here also
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

const ConnectedNavigator = connect(({ nav }) => ({ nav }))(({
  dispatch,
  nav,
}) => (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch: dispatch,
      state: nav,
    })}
  />
));

export default () => (
  <ApolloProvider client={client} store={store}>
    <ConnectedNavigator />
  </ApolloProvider>
);
