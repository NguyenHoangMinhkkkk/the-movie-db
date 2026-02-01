import React from 'react';
import { ColorValue, TextInput, TextInputProps } from 'react-native';
import {
  colors,
  fontFamilies,
  fontSizes,
  FontVariant,
  LineHeightVariant,
  FontSize,
} from '../themes';

// type

export default function (
  defaultTextColor: ColorValue = colors.black,
  defaultPlaceholderTextColor: ColorValue = colors.gray.x4(),
  fontFamily: Record<FontVariant, string> = fontFamilies,
  fontSize: Record<FontSize, number> = fontSizes,
) {
  function createSTextInput(textStyleProps: FontVariant) {
    type Props = {
      value: ColorValue;
      color?: string;
      size?: FontSize;
      lineHeight?: LineHeightVariant;
      placeholderTextStyle?: FontVariant;
      placeholderTextSize?: FontSize;
      customTextStyle?: FontVariant;
      customTextSize?: FontSize;
      letterSpacing?: number;
    } & TextInputProps;

    function STextInput(props: Props, ref: React.Ref<TextInput>) {
      const {
        value,
        multiline = false,
        size = 'md',
        customTextSize,
        color = defaultTextColor,
        placeholderTextColor = defaultPlaceholderTextColor,
        style,
        customTextStyle,
        ...anyProps
      } = props;

      return (
        <TextInput
          allowFontScaling={false}
          value={value}
          autoCorrect={false}
          autoCapitalize="none"
          multiline={multiline}
          textAlignVertical="top"
          enablesReturnKeyAutomatically
          underlineColorAndroid="transparent"
          placeholderTextColor={placeholderTextColor}
          {...anyProps}
          ref={ref}
          style={[
            {
              color,
              fontSize: fontSize[customTextSize ?? size],
              fontFamily: fontFamily[customTextStyle ?? textStyleProps],
              // fontWeight: 'normal',
            },
            multiline === false ? { textAlignVertical: 'center' } : {},
            // Platform.OS === 'ios' ? {letterSpacing: 0.5} : {}, ụ
            style,
          ]}
        />
      );
    }
    return React.forwardRef(STextInput);
  }

  return {
    Black: createSTextInput('black'),

    Bold: createSTextInput('bold'),

    Heavy: createSTextInput('heavy'),

    Light: createSTextInput('light'),

    Medium: createSTextInput('medium'),

    Regular: createSTextInput('regular'),

    Semibold: createSTextInput('semibold'),

    Thin: createSTextInput('thin'),

    Ultralight: createSTextInput('ultralight'),
  };
}
