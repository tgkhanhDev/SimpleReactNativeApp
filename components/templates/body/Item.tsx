import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../../styles';
import {useDispatch} from 'react-redux';
import {addItemAction, addRandomAction, deleteItemAction} from '../../../store/formCRUD/formAction';
import {itemType} from '../../../type';

export const Item = ({itemInfo}: {itemInfo: itemType}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.itemContainer}>
      <Text style={{flex: 1, fontSize: 25}}>
        {itemInfo.id}-{itemInfo.title}---{itemInfo.price}$
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'lime',
            width: 30,
            height: 30,
            borderRadius: 50,
            borderWidth: 1,
          }}
          onPress={() => dispatch(addItemAction(itemInfo))}></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            width: 30,
            height: 30,
            borderRadius: 50,
            borderWidth: 1,
          }}
          onPress={() =>
            dispatch(addRandomAction(itemInfo))
          }></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            width: 30,
            height: 30,
            borderRadius: 50,
            borderWidth: 1,
          }}
          onPress={() =>
            dispatch(deleteItemAction(itemInfo))
          }></TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;
