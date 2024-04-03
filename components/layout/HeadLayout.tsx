import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles';
import {ImageAvatar, User } from '../templates';

export const HeadLayout = () => {
  return (
    <View style={styles.headLayoutStyle}>
      <ImageAvatar />
      <User />
    </View>
  );
};

export default HeadLayout;
