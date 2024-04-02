import React from 'react'
import { Text, View } from 'react-native'
import styles from '../../../styles';

export const User = () => {
  return (
    <View style={styles.UserContainer}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Họ và tên: </Text>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>MSSV: </Text>
    </View>
  );
}

export default User