import styled from 'styled-components/native';
import { Animated } from 'react-native';


const Title = Animated.createAnimatedComponent(styled.Text`
  color: ${props => props.theme.colors.lightYellow};
  font-size: 60px;
  font-family: 'Pacifico-Regular';
  margin-bottom: 40px;
  padding: 0px 0px;
  width: 100%;
  text-align: center;
`);

export default Title;
