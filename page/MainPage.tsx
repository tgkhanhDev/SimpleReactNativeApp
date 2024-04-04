import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import MainLayout from '../components/layout/MainLayout';
import styles from '../styles';
import { BodyLayout } from '../components/layout';

//Get VW, VH:
const {width: viewportWidth} = Dimensions.get('screen');


export const mainPage = () => {
  return (
    <View style={styles.mainLayoutStyle}>
        <MainLayout />
    </View>
  );
};

export default mainPage;
