import styled from 'styled-components/native';
import { Animated } from 'react-native';


const Input = Animated.createAnimatedComponent(styled.TextInput`
  background-color: #fff;
  height: 38px;
  border-radius: ${props => props.theme.constants.borderRadius};
  elevation: ${props => props.theme.constants.elevation};
  padding: 0px 10px;
  width: 210px;
  margin-bottom: 10px;
  text-align: center;
`);

export default Input;
