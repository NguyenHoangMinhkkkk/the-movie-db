import { Platform, StyleSheet } from 'react-native';
import deviceMetrics from './deviceMetrics';

const sizeSystem = (isSmallScreen: boolean, isLargeScreen: boolean) => {
  const baseSize = isSmallScreen ? 3 : isLargeScreen ? 5 : 4;

  return {
    x05: baseSize / 2,
    x1: baseSize,
    x2: baseSize * 2,
    x3: baseSize * 3,
    x4: baseSize * 4,
    x5: baseSize * 5,
    x6: baseSize * 6,
    x8: baseSize * 8,
    x10: baseSize * 10,
  };
};

export default (() => {
  const {
    isPortrait,
    screenWidth,
    screenHeight,
    statusBarHeight,
    isIphoneX,
    isLargeIphone,
    androidApiLevel,
  } = deviceMetrics;

  const isSmallScreen = screenWidth <= 360;
  const isLargeScreen = screenWidth >= 560;
  const limitScreenWidth = Math.min(560, screenWidth);

  // const isPad =
  const isIOS = Platform.OS === 'ios';
  const isAndroid = Platform.OS === 'android';
  const iPhoneBottomSpace = isIphoneX ? (isLargeIphone ? 24 : 14) : 0;

  const sysSize = sizeSystem(isSmallScreen, isLargeScreen);

  const headerBarHeight = 40 + sysSize.x4;

  const headerHeightWithStatusBar = headerBarHeight + statusBarHeight;
  const screenHeightWithoutHeader = screenHeight - headerHeightWithStatusBar;

  return {
    isIOS,
    isAndroid,
    isIphoneX,
    androidApiLevel,
    bottomTabHeight: 32 + iPhoneBottomSpace + sysSize.x4,
    isLargeIphone,
    isPortrait,
    screenWidth,
    screenHeight,
    isSmallScreen,
    isLargeScreen,
    limitScreenWidth,
    statusBarHeight,
    iPhoneXIndicatorLine: iPhoneBottomSpace,
    headerBarHeight,
    headerHeightWithStatusBar,
    screenHeightWithoutHeader,
    lineWidth: StyleSheet.hairlineWidth,
    spacing: sysSize,
    spaceX: (num: number) => sysSize.x1 * num,
    radius: { ...sysSize, max: 100 },
    iconSize: sysSize,
  };
})();
