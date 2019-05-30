import styled from 'styled-components/native';
import { Animated } from 'react-native';


export const Container = styled.View`
  display: flex;
  background-color: ${props => props.theme.colors.lightGreen};
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Input = Animated.createAnimatedComponent(styled.TextInput`
  background-color: #fff;
  height: 50px;
  border-radius: ${props => props.theme.constants.borderRadius};
  elevation: ${props => props.theme.constants.elevation};
  padding: 0px 10px;
  width: 80%;
  margin-bottom: 10px;
`);

export const Title = Animated.createAnimatedComponent(styled.Text`
  color: ${props => props.theme.colors.lightYellow};
  font-size: 60px;
  font-family: 'Pacifico-Regular';
  margin-bottom: 40px;
  padding: 0px 0px;
  width: 100%;
  text-align: center;
`);
