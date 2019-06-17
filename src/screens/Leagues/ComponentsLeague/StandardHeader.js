import React, { Component } from 'react';
import { Animated } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';
import Utils from './utils';


export const HEADER_MAX_HEIGHT = 420;
export const HEADER_MIN_HEIGHT = Utils.APPBAR_HEIGHT;
export const HEADER_HEIGHT = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export const Header = Animated.createAnimatedComponent(styled.View`
  height: ${Utils.APPBAR_HEIGHT};
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`);

export const HeaderLeftIcon = styled.TouchableOpacity`
  position: absolute;
  left: ${Utils.relativeWidth(4)};
`;

export const HeaderRightIcon = styled.TouchableOpacity`
  position: absolute;
  right: ${Utils.relativeWidth(4)};
`;

export const HeaderTitle = Animated.createAnimatedComponent(styled.Text`
  text-align: center;
  justify-content: center;
  color: #000000;
  font-size: ${Utils.fontNormal};
`);

export default class StandardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { scrollY, infoLeague, backScreen } = this.props;
    const headerBackgroundColor = scrollY.interpolate({
      inputRange: [0, HEADER_HEIGHT],
      outputRange: ['#14995D', '#14997e'],
      extrapolate: 'clamp',
      useNativeDriver: true
    });

    const headerTitleOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_HEIGHT / 2, HEADER_HEIGHT],
      outputRange: [0, 0.5, 1],
      extrapolate: 'clamp',
      useNativeDriver: true
    });

    return (
      <Header style={{ backgroundColor: headerBackgroundColor }}>
        <HeaderLeftIcon onPress={() => backScreen()}>
          <Icons name="arrow-left" size={25} color="#FFFFFF" />
        </HeaderLeftIcon>
        <HeaderTitle style={{ color: '#fff', opacity: headerTitleOpacity }}>
          {infoLeague ? infoLeague.name : null}
        </HeaderTitle>
        <HeaderRightIcon />
      </Header>
    );
  }
}
