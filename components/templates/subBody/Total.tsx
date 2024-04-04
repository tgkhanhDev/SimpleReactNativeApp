import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../../styles';
import {useSelector} from 'react-redux';
import { RootState } from '../../../store';
import { cartType, itemType } from '../../../type';

export const Total = () => {

  const {cart} = useSelector(
    (state: RootState) => state.formCRUD,
  );
  let totalAmount = 0,totalPrice =0
  

  cart?.map((item: cartType )=> {
    totalAmount += item.quantity;
    totalPrice += item.item.price * item.quantity;
  } )
    

  return (
    <View style={styles.totalContainer}>
      <View style={{flex: 1}}>
        <Text style={styles.total_Y}>Items: {totalAmount}</Text>
      </View>
      <View
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <Text style={styles.totalStyle}>Total: {totalPrice}</Text>
      </View>
    </View>
  );
};

export default Total;
