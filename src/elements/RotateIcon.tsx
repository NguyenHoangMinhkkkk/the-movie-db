import { SIcon } from '@core/elements';
import { colors, metrics } from '@themes';

import React from 'react';
import { Animated } from 'react-native';

type Props = {
  active: boolean;
  size?: number;
  startDeg?: string;
  endDeg?: string;
};

export default function RotateIcon({
  active = false,
  size = metrics.iconSize.x4,
  startDeg,
  endDeg,
}: Props) {
  const collapseAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const runAnim = (x: boolean) => {
      Animated.timing(collapseAnim, {
        toValue: x ? 1 : 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    };

    runAnim(active);
  }, [active, collapseAnim]);

  return (
    <Animated.View
      style={{
        alignSelf: 'center',
        transform: [
          {
            rotate: collapseAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [startDeg ?? '90deg', endDeg ?? '270deg'],
            }),
          },
        ],
      }}
    >
      <SIcon.Icon
        name="CaretRightIcon"
        size={size ?? metrics.iconSize.x4}
        color={colors.black}
      />
    </Animated.View>
  );
}
