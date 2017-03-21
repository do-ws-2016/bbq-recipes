import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

const HeaderTitle = styled.Text`
    font-weight: ${props => props.os === 'ios' ? '600' : '500'};
    font-size: ${props => props.os === 'ios' ? 17 : 18};
    text-align: ${props => props.os === 'ios' ? 'center' : 'left'};
    color: rgba(0, 0, 0, .9);
    background-color: ${props => props.os === 'ios' ? '#EFEFF2' : '#FFF'};
    margin: 16 0;
    width: 100%;
    padding-left: ${props => props.os === 'ios' ? 0 : 10};
`;
const Header = props => (
  <HeaderTitle os={Platform.OS}>
    {props.data.header && props.data.header.title}
  </HeaderTitle>
);

export default Header;
