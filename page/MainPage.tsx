import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text} from 'react-native';
import MainLayout from '../components/layout/MainLayout';

//Get VW, VH:
const {width: viewportWidth} = Dimensions.get('screen');

const Styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    backgroundColor: 'gray',
    color: '#f6f6f6',
    height: 3 * viewportWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'pink',
  },
});

export const mainPage = () => {
  return (
    <ScrollView>
      <MainLayout />
    </ScrollView>
  );
};

export default mainPage;
