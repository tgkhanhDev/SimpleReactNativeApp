import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles';
import { Image, User } from '../templates';

export const HeadLayout = () => {
  return (
    <View style={styles.headLayoutStyle}>
      <Image />
      <User />
    </View>
  );
};

export default HeadLayout;
