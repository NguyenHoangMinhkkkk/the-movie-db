import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { RootStackParamList } from './compositeParams';

export type StackRouteProp<
  P extends RootStackParamList,
  T extends keyof P,
> = RouteProp<P, T>;
export type NavigationProp<
  P extends ParamListBase,
  T extends keyof P,
> = NativeStackNavigationProp<P, T>;
export type TabNavigationProp<
  P extends ParamListBase,
  T extends keyof P,
> = BottomTabNavigationProp<P, T>;

export type ScreenPropsType<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

import { StatusBarStyle } from 'react-native';

export type TInitialParams<T, P = {}> = Record<
  keyof T,
  DefaultInitialParams & P
>;

// This is for adding default params to all screens
type DefaultInitialParams = {
  statusBarStyle?: StatusBarStyle;
};

export type ScreenParams<T> = T extends undefined
  ? DefaultInitialParams
  : T & DefaultInitialParams;
