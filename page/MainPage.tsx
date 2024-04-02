import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text} from 'react-native';
import MainLayout from '../components/layout/MainLayout';
import styles from '../styles';

//Get VW, VH:
const {width: viewportWidth} = Dimensions.get('screen');

// const Styles = StyleSheet.create({
//   titleText: {
//     backgroundColor: '#5989c1ecfe',
//     borderWidth: 2,
//     borderColor: 'black',
//   },
// });

export const mainPage = () => {
  return (
    <ScrollView style={styles.mainLayoutStyle}>
      <MainLayout />
    </ScrollView>
  );
};

export default mainPage;
