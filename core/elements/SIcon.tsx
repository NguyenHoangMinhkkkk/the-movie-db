import React from 'react';
import { Text, Image, ImageSourcePropType } from 'react-native';
import { colors, metrics } from '../themes';

import {
  IconProps,
  XIcon,
  CheckIcon,
  WarningIcon,
  XCircleIcon,
  ImageIcon,
} from 'phosphor-react-native';
import { ColorValue, StyleProp, ViewStyle } from 'react-native';

/**
 * Default size
 * @param {Number} size - size icon -> default 16px
 */

type ImageIconProp = {
  size?: number;
  strokeWidth?: number;
  color?: string;
  source: ImageSourcePropType;
  originColorEnable?: boolean;
};

export type IconElementProps = IconProps & {
  name: IconConfigType;
  color?: string | ColorValue;
  size?: number;
  style?: StyleProp<ViewStyle>;
  weight?: IconProps['weight'];
};

type IconConfigType =
  | 'XIcon'
  | 'CheckIcon'
  | 'WarningIcon'
  | 'XCircleIcon'
  | 'ImageIcon';

const IconConfig: Record<IconConfigType, React.FC<IconProps>> = {
  XIcon,
  CheckIcon,
  WarningIcon,
  XCircleIcon,
  ImageIcon,
};

function createSIcon() {
  function createIconElement() {
    function IconElement(iconProps: IconElementProps) {
      const {
        name,
        color = colors.black,
        size = metrics.iconSize.x4,
        weight = 'regular',
      } = iconProps;
      const Icon: React.FC<IconElementProps> = IconConfig?.[
        name
      ] as React.FC<IconElementProps>;

      if (Icon && name) {
        return (
          <Icon
            key={name}
            weight={weight}
            name={name}
            size={size}
            color={color}
          />
        );
      }
      return <Text>{'[?]'}</Text>;
    }
    return IconElement;
  }

  function createImageIconElement() {
    function SImageIcon(imageIconProps: ImageIconProp) {
      const {
        color = colors.black,
        size = metrics.iconSize.x6,
        source,
        originColorEnable = false,
      } = imageIconProps;

      return (
        <Image
          source={source}
          style={{ width: size, height: size }}
          {...(originColorEnable ? { tintColor: color } : {})}
        />
      );
    }
    return SImageIcon;
  }

  return {
    Image: createImageIconElement(),
    Icon: createIconElement(),
  };
}

export default createSIcon();
