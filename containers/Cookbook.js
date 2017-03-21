import { Cookbook } from '../components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withProps, compose } from 'recompose';
const Query = gql`
  query cookbook($id: ID!) {
    cookbook: Cookbook(id: $id) {
      title
      recipes {
        _id: id
        title
        author{
          username
        }
        tags
        thumbnail{handle}
      }
    }
  }
`;

export default compose(
  withProps(({ navigation }) => ({
    id: navigation.state.params.cookbook._id,
  })),
  graphql(Query, { fetchPolicy: 'cache-and-network' })
)(Cookbook);
