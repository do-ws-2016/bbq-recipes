import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { List, Row } from './index';
import { media } from '../utils';

const HEIGHT = 85;

const renderRow = navigate =>
  cookbook => (
    <Row
      height={HEIGHT}
      onPress={() => navigate('Cookbook', { cookbook })}
      underlayColor="#D0D0D0"
      source={
        cookbook.thumbnail
          ? {
              uri: media(Dimensions.get('window').width, HEIGHT)(
                cookbook.thumbnail
              ),
            }
          : null
      }
      title={cookbook.title}
      author={cookbook.author.username}
      tags={cookbook.tags}
    />
  );

export default class Cookbooks extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const { data } = this.props;
    return (
      <List
        data={data.cookbooks}
        renderRow={renderRow(navigate)}
        loading={data.loading}
        error={data.error}
        onRefresh={data.refetch}
      />
    );
  }
}
