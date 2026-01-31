import { StyleSheet, ViewStyle } from 'react-native';
import colors from '@core/themes/colors';
import metrics from '@core/themes/metrics';

const platformShadowStyle = (boxShadow?: string) => {
  let shadowStyle: ViewStyle = {};
  if (metrics.isAndroid) {
    if (metrics.androidApiLevel && metrics.androidApiLevel >= 28) {
      shadowStyle = boxShadow
        ? { boxShadow }
        : {
            // boxShadow: boxShadow || `2px 3px 8px ${colors.black(0.1)}`,
            backgroundColor: colors.white,
            shadowColor: colors.blackA(0.15),
            shadowOffset: {
              width: 2,
              height: 3,
            },
            shadowOpacity: 0.8,
            shadowRadius: 5,
          };
    } else {
      shadowStyle = {
        elevation: 2,
      };
    }
  } else {
    shadowStyle = boxShadow
      ? { boxShadow }
      : {
          backgroundColor: colors.white,
          shadowColor: colors.blackA(0.15),
          shadowOffset: {
            width: 2,
            height: 3,
          },
          shadowOpacity: 0.8,
          shadowRadius: 5,
        };
  }

  return shadowStyle;
};

export default StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
  absoluteFill: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  alignItemsEnd: { alignItems: 'flex-end' },
  alignItemsStart: { alignItems: 'flex-start' },
  alignSelf: {
    alignSelf: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: { flexDirection: 'column' },
  flex: { flex: 1 },
  flexAlignCenter: {
    alignItems: 'center',
    flex: 1,
  },
  flexCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  flexGrow: { flexGrow: 1 },
  flexJustifyCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
  },
  flexShrink: { flexShrink: 1 },
  justifyContentEnd: { justifyContent: 'flex-end' },
  justifyContentStart: { justifyContent: 'flex-start' },
  notificationShadow: platformShadowStyle(`0px 0px 8px ${colors.gray.x3()}`),
  row: { flexDirection: 'row' },
  rowAlignCenter: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  shadowStyle: platformShadowStyle(`2px 3px 8px ${colors.blackA(0.1)}`),
  shadowStyleBottomUp: platformShadowStyle(
    `0px 0px 8px ${colors.blackA(0.05)}`,
  ),
  shadowStyleTopDown: platformShadowStyle(
    `-2px 0px 8px ${colors.blackA(0.08)}`,
  ),
  spaceBetween: { justifyContent: 'space-between' },
  textAlignCenter: { textAlign: 'center' },
  textDecorationThroughLine: { textDecorationLine: 'line-through' },
  textDecorationUnderLine: { textDecorationLine: 'underline' },
});
