import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles';
import { Item } from '../templates';

export const BodyLayout = () => {
  return (
    <View style={styles.bodyContainer}>
      <Item itemScript="a" />
      <Item itemScript="b" />
    </View>
  );
};

export default BodyLayout;
