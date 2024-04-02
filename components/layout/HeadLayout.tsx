import React from 'react';
import {Text, View} from 'react-native';
import {Image, User} from '../templates/headPage';
import styles from '../../styles';

export const HeadLayout = () => {
  return (
    <View style={styles.headLayoutStyle}>
      <Image />
      <User />
    </View>
  );
};

export default HeadLayout;
