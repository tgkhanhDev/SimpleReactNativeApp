import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../../../styles';

export const ImageAvatar = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.avatar}
        source={require('../../../img/capoo.png')}
      />
    </View>
  );
};

export default ImageAvatar;
