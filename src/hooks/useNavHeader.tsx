import { RootStackParamList } from '@navigation/types/compositeParams';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import { ColorValue } from 'react-native';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  title?: string;
  backgroundColor?: ColorValue;
  customOptions?: Partial<NativeStackNavigationOptions & { subTitle?: string }>;
};

const useNavHeader = ({
  navigation,
  title,
  backgroundColor,
  customOptions = {},
}: Props) => {
  React.useLayoutEffect(() => {
    let options: Partial<NativeStackNavigationOptions> = {};
    if (title) {
      options = {
        headerTitle: title || '',
      };
    }

    if (customOptions) {
      options = {
        ...options,
        ...customOptions,
      };
    }

    navigation.setOptions({
      ...options,
    });
  }, [navigation, title, backgroundColor, customOptions]);
};

export default useNavHeader;
