import React from 'react';
import { Alert, ColorValue, Text, TextProps } from 'react-native';
import {
  fontFamilies,
  fontSizes,
  lineHeights,
  type FontVariant,
  type LineHeightVariant,
  type FontSize,
} from '../themes';

export type STextProps = {
  color?: ColorValue;
  size?: FontSize;
  lineHeight?: LineHeightVariant;
  children?: React.ReactNode;
  pointerEvents?: any;
  customTextStyle?: FontSize;
  customTextSize?: FontSize;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
} & TextProps;

export default function (
  styleConfig: Record<FontVariant, string> = fontFamilies,
  sizeConfig: Record<FontSize, number> = fontSizes,
  lineHeighConfig: Record<
    FontSize,
    Record<LineHeightVariant, number>
  > = lineHeights,
  debug?: boolean,
) {
  function createSText(textStyleEnum: FontVariant) {
    type Props = {
      color?: ColorValue;
      size?: FontSize;
      lineHeight?: LineHeightVariant;
      children?: React.ReactNode;
      pointerEvents?: any;
      customTextStyle?: FontVariant;
      customTextSize?: FontSize;
      textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
      debug?: boolean;
    } & TextProps;

    function SText(props: Props) {
      const {
        color = 'black',
        size = 'md',
        lineHeight = 'normal',
        textAlign = 'auto',
        children,
        style,
        customTextStyle,
        customTextSize,
        ...anyProps
      } = props;

      if (!children) {
        return null;
      }

      return (
        <Text
          {...anyProps}
          allowFontScaling={false}
          adjustsFontSizeToFit={false}
          onLongPress={
            debug
              ? () => {
                  Alert.alert(
                    `[${sizeConfig[customTextSize ?? size]}][${
                      customTextStyle ?? textStyleEnum
                    }]`,
                  );
                }
              : undefined
          }
          style={[
            {
              color,
              fontSize: sizeConfig[customTextSize ?? size],
              fontFamily: styleConfig[customTextStyle ?? textStyleEnum],
              lineHeight: lineHeighConfig[customTextSize ?? size][lineHeight],
              textAlign: textAlign,
            },
            // metrics.isIOS ? {letterSpacing: 0.5} : {},
            style,
          ]}
        >
          {children}
        </Text>
      );
    }

    return SText;
  }

  function calculateSpace(
    spaceNumber: number,
    _textSize: FontSize,
    _textLineHeight: LineHeightVariant,
  ) {
    const size = sizeConfig[_textSize || 'md'];
    const lineHeight =
      lineHeighConfig[_textSize || 'md'][_textLineHeight || 'normal'];
    return spaceNumber - (lineHeight - size) / 2;
  }
  return {
    calculateSpace,
    Black: createSText('black'),

    Bold: createSText('bold'),

    Heavy: createSText('heavy'),

    Light: createSText('light'),

    Medium: createSText('medium'),

    Regular: createSText('regular'),

    Semibold: createSText('semibold'),

    Thin: createSText('thin'),

    Ultralight: createSText('ultralight'),
  };
}
