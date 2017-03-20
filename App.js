import React from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Cookbooks, Cookbook, Recipe } from './containers';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

const Navigator = StackNavigator({
  Cookbooks: {
    screen: Cookbooks,
    navigationOptions: {
      title: 'Cookbooks',
    },
  },
  Cookbook: {
    screen: Cookbook,
    navigationOptions: {
      title: ({ state }) => `${state.params.cookbook.title}`,
    },
  },
  Recipe: {
    screen: Recipe,
    navigationOptions: {
      title: ({ state }) => `${state.params.recipe.title}`,
    },
  },
});
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graphcms.com/simple/v1/cj0dvo3joqg34012777obq6td',
  }),
});
export default () => (
  <ApolloProvider client={apolloClient}>
    <Navigator />
  </ApolloProvider>
);
