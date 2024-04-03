import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../../styles';

export const Total = () => {
  return (
    <View style={styles.totalContainer}>
      <View style={{flex: 1}}>
        <Text style={styles.total_Y}>Items: 0</Text>
      </View>
      <View style={{flex: 1, justifyContent:'flex-end', alignItems:'flex-end'}}>
        <Text style={styles.totalStyle}>Total: aa</Text>
      </View>
    </View>
  );
};

export default Total;
