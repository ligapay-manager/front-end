import React from 'react';
import { ActivityIndicator, View } from 'react-native';


const ActivityIndicatorComponent = () => (
  <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
    <ActivityIndicator size="large" color="#14995D" />
  </View>
);

export default ActivityIndicatorComponent;
