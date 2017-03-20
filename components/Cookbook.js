import React from 'react';
import { Dimensions } from 'react-native';
import { List, Row } from './index';
import { media } from '../utils';

const { height, width } = Dimensions.get('window');
const HEIGHT = 85;
const WIDTH = Math.max(height, width);
const getImage = media(WIDTH, HEIGHT);

const renderRow = navigate =>
  recipe => (
    <Row
      onPress={() => navigate('Recipe', { recipe, task: 0, ticks: null })}
      underlayColor="#D0D0D0"
      height={HEIGHT}
      title={recipe.title}
      source={recipe.thumbnail ? { uri: getImage(recipe.thumbnail) } : null}
      author={recipe.author.username}
      tags={recipe.tags}
    />
  );

export default class Cookbooks extends React.Component {
  render() {
    console.log(this.props);
    const { navigate } = this.props.navigation;
    const { data } = this.props;
    return (
      <List
        data={!data.loading && data.cookbook.recipes}
        renderRow={renderRow(navigate)}
        loading={data.loading}
        error={data.error}
        onRefresh={data.refetch}
      />
    );
  }
}
