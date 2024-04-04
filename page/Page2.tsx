import React from 'react'
import { Button, Text, View } from 'react-native'

import {RootStackParamList} from '../App';
import {NativeStackScreenProps, NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type Page2Props = NativeStackScreenProps<RootStackParamList, 'Page2'>;

export const Page2 = ({route}: Page2Props ) => {

    const {title } = route.params

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View>
        <Text style={{fontSize: 40}}>This is Page 2</Text>
        <Text>Title: {title} </Text>

        <Button
        title='Go to Home'
        onPress={() => navigation.navigate('Home') }
        ></Button>
    </View>
  )
}

export default Page2