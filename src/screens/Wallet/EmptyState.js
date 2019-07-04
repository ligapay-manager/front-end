import React from 'react';
import { TouchableNativeFeedback, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ButtonContainer, ButtonMessage } from './styled';


const EmptyState = () => (
  // <TouchableNativeFeedback>
  <ButtonContainer>
    <Icon name="credit-card" size={20} color="#a0a0a0" />
    <Text style={{ marginLeft: 15, fontSize: 16, fontFamily: 'Abel-Regular', color: 'black' }}>Adicionar cartão</Text>
  </ButtonContainer>
  // </TouchableNativeFeedback>
);

export default EmptyState;
