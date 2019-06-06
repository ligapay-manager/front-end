import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ButtonContainer, ButtonMessage } from './styled';


const EmptyState = () => (
  <TouchableNativeFeedback>
    <ButtonContainer>
      <Icon name="credit-card" size={20} color="#a0a0a0" />
      <ButtonMessage>Adicionar cartão</ButtonMessage>
    </ButtonContainer>
  </TouchableNativeFeedback>
);

export default EmptyState;
