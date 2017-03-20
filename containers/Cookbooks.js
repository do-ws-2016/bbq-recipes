import { Cookbooks } from '../components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Query = gql`
  query cookbooks_list {
    cookbooks: allCookbooks {
    	_id: id
      title
      author{
        username
      }
      tags
      thumbnail{handle}
    }
  }
`;

export default graphql(Query, { fetchPolicy: 'cache-and-network' })(Cookbooks);
