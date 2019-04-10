/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { TouchableNativeFeedback } from 'react-native';

import styled from 'styled-components/native';


const ButtonContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 210px;
    padding: 5px 10px;
    
    border-radius: ${({ theme }) => theme.constants.borderRadius};
    height: ${props => props.height || '38'}px;
    background-color: ${({ theme }) => '#14996F' || theme.colors.darkGreen};
    border: ${props => (props.outline ? `1px solid ${props.theme.colors.darkGreen}` : '0px')};
    elevation: ${props => (props.outline ? '0px' : '1px')};
`;

const ButtonText = styled.Text`
    color: #fff
`;

class Button extends React.Component {
  render() {
    const { outline, style, title, ...defaults } = this.props;

    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        {...defaults}
      >
        <ButtonContainer outline={outline} style={style}>
          <ButtonText>
            {title}
          </ButtonText>
        </ButtonContainer>
      </TouchableNativeFeedback>
    );
  }
}

export default Button;
