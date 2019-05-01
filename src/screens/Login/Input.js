import styled from 'styled-components/native';
import { Animated } from 'react-native';


const Input = Animated.createAnimatedComponent(styled.TextInput`
  background-color: #fff;
  height: 50px;
  border-radius: ${props => props.theme.constants.borderRadius};
  elevation: ${props => props.theme.constants.elevation};
  padding: 0px 10px;
  width: 80%;
  margin-bottom: 10px;
`);

export default Input;
