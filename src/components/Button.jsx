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
    border-radius: 4px;
    height: 38px;

    background-color: ${props => (props.outline ? 'transparent' : '#034732')};
    border: ${props => (props.outline ? '1px solid #034732;' : '0px')};
    elevation: ${props => (props.outline ? '0px' : '2px')};
`;

const ButtonText = styled.Text`
    color: #fff
`;

class Button extends React.Component {
  render() {
    const {
      outline, style, title, ...defaults
    } = this.props;

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
