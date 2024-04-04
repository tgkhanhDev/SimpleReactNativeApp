import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from '../../styles';
import {Item} from '../templates';
import {cartType, itemType} from '../../type';
import {useForm} from '../../hook/useForm';

export const BodyLayout = () => {
  const itemData: itemType[] = [];

  const {cart} = useForm();
  cart?.map(e => itemData.push(e.item));

  
  return (
    <View style={styles.bodyContainer}>
      <FlatList
        data={itemData}
        renderItem={({item}) => {
          return <Item itemInfo={item}></Item>;
        }}
      />
    </View>
  );
};

export default BodyLayout;
