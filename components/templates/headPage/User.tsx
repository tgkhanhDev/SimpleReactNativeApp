import React from 'react'
import { Text, View } from 'react-native'
import styles from '../../../styles';

export const User = () => {
  return (
    <View style={styles.UserContainer}>
      <Text>Họ và tên: </Text>
      <Text>MSSV: </Text>
    </View>
  );
}

export default User