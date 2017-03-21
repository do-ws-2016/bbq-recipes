import React from 'react';
import styled from 'styled-components/native';
import {
  View,
  ScrollView,
  PixelRatio,
  RefreshControl,
  NetInfo,
} from 'react-native';

import { Spinner } from './index';

const Scroll = styled(ScrollView)`
  background-color: white;
  overflow: visible;
`;
const ConnectionError = styled.View`
  margin-top: 40;
  flex-direction: row;
  justify-content: center;
`;
const Text = styled.Text`
  color: orange;
`;

export default ({ loading, onRefresh, error, renderContent, data }) => {
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
  return (
    <Scroll
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={safeRefresh} />
      }
    >
      {!error
        ? data && renderContent(data)
        : <ConnectionError>
            <Text>An error while connecting occured</Text>
          </ConnectionError>}
    </Scroll>
  );
};
