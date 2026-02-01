import { SText, STouchable } from '@elements';
import { colors, metrics } from '@themes';
import React from 'react';
import {
  ActivityIndicator,
  ColorValue,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

type Props = {
  isLoading?: boolean;
  variant?: 'radius-max' | 'radius-nomal';
  active?: boolean;
  activeBackground?: ColorValue;
  inactiveBackground?: ColorValue;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  text: string;
};

export default function Button(props: Props) {
  const {
    isLoading = false,
    variant = 'radius-nomal',
    active = true,
    activeBackground = colors.sky.x4(),
    inactiveBackground = colors.gray.x3(),
    text = '',
  } = props;

  return (
    <STouchable
      onPress={props.onPress}
      style={[
        styles.container,
        {
          borderRadius:
            variant === 'radius-max' ? metrics.radius.max : metrics.radius.x2,
        },
        { backgroundColor: active ? activeBackground : inactiveBackground },
        props.style,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator color={active ? colors.white : colors.gray.x5()} />
      ) : (
        <SText.Bold color={active ? colors.white : colors.gray.x5()} size="lg">
          {text}
        </SText.Bold>
      )}
    </STouchable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
