import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator style={styles.indicator} size={size || 'large'}/>
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicator: {
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 1,
     }
};

export { Spinner };