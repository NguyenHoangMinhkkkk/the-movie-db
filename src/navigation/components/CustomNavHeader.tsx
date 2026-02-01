import { SIcon, SText, STouchable } from '@elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { basicStyles, colors, metrics } from '@themes';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type HeaderOptionsWithSubTitle = NativeStackHeaderProps['options'] & {
  subTitle?: string;
};

type Props = Omit<NativeStackHeaderProps, 'options'> & {
  headerTitle?: string;
  backButton?: boolean;
  options: HeaderOptionsWithSubTitle;
};

export default function RenderDefaultHeader(props: Props) {
  const headerTitle = String(
    props.options.title || props?.headerTitle || props.options.headerTitle,
  );
  const subTitle = String(props.options?.subTitle || '');
  const headerStyle = props.options?.headerStyle;
  const headerTintColor = props.options?.headerTintColor;

  return (
    <View style={[styles.container, headerStyle ? headerStyle : {}]}>
      <STouchable style={styles.headerSide} onPress={props.navigation.goBack}>
        <SIcon.Icon
          name="CaretLeftIcon"
          weight="bold"
          size={metrics.iconSize.x8}
          color={headerTintColor ?? colors.blue.x5()}
        />
      </STouchable>

      <View style={basicStyles.flexCenter}>
        <SText.Semibold
          numberOfLines={1}
          size="lg"
          lineHeight="less"
          color={headerTintColor ?? colors.black}
        >
          {headerTitle || ''}
        </SText.Semibold>
        <SText.Regular
          numberOfLines={1}
          size="sm"
          lineHeight="less"
          color={headerTintColor ?? colors.black}
        >
          {subTitle || ''}
        </SText.Regular>
      </View>

      <View style={styles.headerSide}>{/*Header Right Button*/}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: metrics.headerBarHeight,
  },
  headerSide: {
    paddingLeft: metrics.spacing.x1,
    paddingRight: metrics.spacing.x3,
    width: metrics.spaceX(15),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
