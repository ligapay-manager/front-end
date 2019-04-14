import React from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import View from '../components/View';
import Button from '../components/Button';


export default () => (
  <View>
    <Button title="Sair" onPress={() => AsyncStorage.multiRemove(['token', 'refreshToken'])}>
      <Text style={{ color: '#fff' }}>Sair</Text>
    </Button>
  </View>
);
