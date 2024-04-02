import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../../../styles';

export const Item = ({itemScript}: {itemScript?: string}) => {
  itemScript = itemScript || 'Default Item';
  return (
    <View style={styles.itemContainer}>
      <Text style={{flex: 1, fontSize: 25}}>{itemScript}</Text>
      <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center', gap: 10}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'lime',
            width: 30,
            height: 30,
            borderRadius: 50,
            borderWidth: 1,
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            width: 30,
            height: 30,
            borderRadius: 50,
            borderWidth: 1,
          }}></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            width: 30,
            height: 30,
            borderRadius: 50,
            borderWidth: 1,
          }}></TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;
