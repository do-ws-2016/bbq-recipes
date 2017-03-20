import { Recipe } from '../components';
import { graphql, gql } from 'react-apollo';
import { withProps, compose } from 'recompose';

const Query = gql`
  query recipe($id: ID!) {
    recipe: Recipe(id: $id) {
      _id: id
      title
      description
      author{
        username
      }
      tags
      sequence {
        title
        duration
        intensity
        method
      }
      thumbnail{handle}
    }
  }`;

export default compose(
  withProps(({ navigation }) => ({
    id: navigation.state.params.recipe._id,
  })),
  graphql(Query, { fetchPolicy: 'cache-and-network' })
)(Recipe);
