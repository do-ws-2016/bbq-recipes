import React from 'react';
import styled from 'styled-components/native';
import { Scroll } from './index';
import {
  View,
  ListView,
  PixelRatio,
  RefreshControl,
  NetInfo,
} from 'react-native';

import { Spinner } from './index';

const List = styled(ListView)`
  background-color: white;
  overflow: visible;
`;
const ConnectionError = styled.View`
  flex-direction: row;
  justify-content: center;
`;
const Text = styled.Text`
  color: orange;
`;

const renderLoading = () => null;

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default ({ data, renderRow, loading, onRefresh, error }, props) => {
  const handleFirstConnectivityChange = isConnected => {
    if (isConnected) {
      onRefresh();
    }
    NetInfo.isConnected.removeEventListener(
      'change',
      handleFirstConnectivityChange
    );
  };
  const safeRefresh = () => {
    NetInfo.isConnected.addEventListener(
      'change',
      handleFirstConnectivityChange
    );
  };
  if (!error) {
    return (
      <List
        removeClippedSubviews={false}
        dataSource={data ? ds.cloneWithRows(data) : ds}
        renderRow={data ? renderRow : renderLoading}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={safeRefresh} />
        }
      />
    );
  } else {
    return (
      <Scroll
        loading={loading}
        error={error}
        data={data}
        onRefresh={onRefresh}
      />
    );
  }
};
