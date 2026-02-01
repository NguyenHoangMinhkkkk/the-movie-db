import { colors, metrics } from '@themes';
import React from 'react';
import { ColorValue, StyleSheet, View } from 'react-native';
import { G, Path, Svg } from 'react-native-svg';

type Props = {
  percent: number;
  size: number;
  backgroundLineWidth: number;
  lineWidth: number;
  children?: React.ReactNode;
  capSize?: number;
  tintColor?: ColorValue;
  backgroundColorLineColor?: ColorValue;
};

export default function CircularProgress(props: Props) {
  const {
    size,
    lineWidth,
    percent = 0,
    backgroundLineWidth = 10,
    children = null,
    capSize = 20,
    tintColor = colors.white,
    backgroundColorLineColor = colors.whiteA(0.3),
  } = props;

  const halfSize = size / 2;

  // consts
  const maxWidthCircle = backgroundLineWidth
    ? Math.max(lineWidth, backgroundLineWidth)
    : lineWidth;
  const radius = size / 2 - maxWidthCircle / 2;
  const offset = size - maxWidthCircle * 2;
  const clampFill = (number: number) => Math.min(100, Math.max(0, number));
  const currentFillAngle = (360 * clampFill(percent)) / 100;

  // path calc
  const polarToCartesian = (
    centerX: number,
    centerY: number,
    angleInDegrees: number,
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };
  const createCirclePath = (
    x: number,
    y: number,
    startAngle: number,
    endAngle: number,
  ) => {
    const start = polarToCartesian(x, y, endAngle - 1);
    const end = polarToCartesian(x, y, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    const d = [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ];
    return d.join(' ');
  };
  const circlePath = createCirclePath(halfSize, halfSize, 0, currentFillAngle);
  const backgroundPath = createCirclePath(halfSize, halfSize, 0, 360);

  const renderCap = () => {
    const { x = 0, y = 0 } = polarToCartesian(
      halfSize,
      halfSize,
      currentFillAngle - 90,
    );
    if (!x || !y) {
      return null;
    }
    return (
      <View
        style={[
          { top: x - capSize / 2, right: y - capSize / 2 },
          styles.capComponent,
          { width: capSize, height: capSize },
          { backgroundColor: percent === 0 ? colors.transparent : tintColor },
        ]}
      />
    );
  };

  return (
    <View style={{}}>
      <Svg width={size} height={size}>
        {renderCap()}
        <G rotation={0} originX={size / 2} originY={size / 2}>
          <Path
            d={backgroundPath}
            stroke={backgroundColorLineColor as ColorValue}
            strokeWidth={backgroundLineWidth || lineWidth}
            strokeLinecap="round"
            fill="transparent"
          />
          {Number(percent) > 0 ? (
            <Path
              d={circlePath}
              stroke={tintColor as ColorValue}
              strokeWidth={lineWidth}
              strokeLinecap="round"
              fill="transparent"
            />
          ) : null}
        </G>
      </Svg>
      {children ? (
        <View
          style={[
            styles.childrenStyle,
            {
              left: maxWidthCircle,
              top: maxWidthCircle,
              width: offset,
              height: offset,
              borderRadius: offset / 2,
            },
          ]}
        >
          {children}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  capComponent: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 15,
    height: metrics.spaceX(5),
    position: 'absolute',
    width: metrics.spaceX(5),
  },
  childrenStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'absolute',
  },
});
