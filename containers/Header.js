import { Header } from '../components';
import { graphql, gql } from 'react-apollo';
import { withProps, compose } from 'recompose';
import { connect } from 'react-redux';

const recipeTitle = gql`
  query recipeTitle($id: ID!) {
    header: Recipe(id: $id) {
      title
    }
  }`;
const cookbookTitle = gql`
  query cookbookTitle($id: ID!) {
    header: Cookbook(id: $id) {
      title
    }
  }`;
const Cookbooks = Header;
const Cookbook = graphql(cookbookTitle)(Header);
const Recipe = graphql(recipeTitle)(Header);
export default {
  Cookbook,
  Recipe,
  Cookbooks,
};
