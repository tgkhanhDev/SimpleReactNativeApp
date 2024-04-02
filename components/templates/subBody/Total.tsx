import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../../styles';

export const Total = () => {
  return (
    <View style={styles.totalContainer}>
      <View style={{flex: 1}}>
        <Text style={styles.total_Y}>Y</Text>
      </View>
      <View style={{flex: 1, justifyContent:'flex-end', alignItems:'flex-end'}}>
        <Text style={styles.totalStyle}>Total: X</Text>
      </View>
    </View>
  );
};

export default Total;
