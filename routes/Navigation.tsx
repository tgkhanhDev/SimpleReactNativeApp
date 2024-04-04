import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {};

export type HomeStackParamList = {
  Home: undefined;
  Detail: undefined;
};

const RootStack = createNativeStackNavigator<HomeStackParamList>();
