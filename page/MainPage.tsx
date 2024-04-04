import React from 'react';
import {Button, Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import MainLayout from '../components/layout/MainLayout';
import styles from '../styles';
import {RootStackParamList} from '../App'
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


export const MainPage = ({navigation}: HomeProps) => {
  return (
    <View style={styles.mainLayoutStyle}>
      <MainLayout />
      {/* Navigate  */}
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Page2', {
            title: "Props Truyền từ MainPage"
          })}
          ></Button>
      </View>
    </View>
  );
};

export default MainPage;
