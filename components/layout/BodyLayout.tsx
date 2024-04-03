import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from '../../styles';
import { Item } from '../templates';

export const BodyLayout = () => {
  const itemData = [
    {id: '1', title: 'a'},
    {id: '2', title: 'b'},
  ];
  return (
    <View style={styles.bodyContainer}>
      <FlatList
      data={itemData}
      renderItem={({item})=>{
        return <Item itemInfo={item.title}></Item>
      }}
      />
    </View>
  );
};

export default BodyLayout;
