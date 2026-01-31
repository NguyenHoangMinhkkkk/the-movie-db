import { Dimensions, Platform, StatusBar } from 'react-native';
import RNDeviceInfo from 'react-native-device-info';
import { initialWindowMetrics } from 'react-native-safe-area-context';

type DimensionsType = { width: number; height: number };

export default (() => {
  const dimensionsWindow: DimensionsType = Dimensions.get('window');
  const dimensionsScreen: DimensionsType = Dimensions.get('screen');

  const isPortrait = dimensionsScreen.width < dimensionsScreen.height;
  const androidApiLevel = RNDeviceInfo.getApiLevelSync();

  if (Platform.OS === 'ios') {
    const screenWidth = isPortrait
      ? dimensionsWindow.width
      : dimensionsWindow.height;
    const screenHeight = isPortrait
      ? dimensionsWindow.height
      : dimensionsWindow.width;

    const isIphoneX =
      !Platform.isPad &&
      !Platform.isTV &&
      (screenHeight === 812 || // iPhone X, XS, 11 Pro, 12–13 Mini
        screenHeight === 844 || // iPhone 12–13, 12–13 Pro, 14
        screenHeight === 852 || // iPhone 14 Pro, iPhone 16, iPhone 17
        screenHeight === 874 || // iPhone 16 Pro, iPhone 17 Pro
        screenHeight === 896 || // iPhone XR, XS Max, 11, 11 Pro Max
        screenHeight === 926 || // iPhone 12–13 Pro Max, 14 Plus
        screenHeight === 932 || // iPhone 14 Pro Max, iPhone 16 Plus
        screenHeight === 956); // iPhone 16 Pro Max, iPhone 17 Pro Max

    let isLargeIphone = false;
    let statusBarHeight = initialWindowMetrics?.insets?.top;

    if (!statusBarHeight) {
      if (!isIphoneX) {
        statusBarHeight = 20;
      } else if (screenHeight >= 852) {
        isLargeIphone = true;
        statusBarHeight = 54;
      } else {
        statusBarHeight = 44;
      }
    }

    return {
      isPortrait,
      screenWidth,
      screenHeight,
      statusBarHeight,
      isIphoneX,
      isLargeIphone,
    };
  } else {
    // Android Metrics
    const androidWidth = isPortrait
      ? dimensionsScreen.width
      : dimensionsScreen.height;
    let androidHeight = isPortrait
      ? dimensionsScreen.height
      : dimensionsScreen.width;

    // subtract nav bar inset if available
    androidHeight -= initialWindowMetrics?.insets?.bottom ?? 0;

    return {
      isPortrait,
      androidApiLevel,
      screenWidth: Math.round(androidWidth),
      screenHeight: Math.round(androidHeight),
      statusBarHeight: StatusBar.currentHeight ?? 0,
      isIphoneX: false,
      isLargeIphone: false,
    };
  }
})();
