import React from 'react'
import { Text, View } from 'react-native'
import { BodyLayout, HeadLayout, SubBodyLayout } from '.'

export const MainLayout = () => {
  return (
    <View style={{padding: 10}}>
      <HeadLayout />
      <SubBodyLayout />
      <BodyLayout />
    </View>
  );
}

export default MainLayout