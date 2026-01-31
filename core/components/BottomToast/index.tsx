import React from 'react';
import { Platform, StyleSheet, View, useWindowDimensions } from 'react-native';

import { SIcon, SText, STouchable, Spacing } from '../../elements';
import { colors, metrics } from '../../themes';

import {
  ToastPosition,
  Toast as ToastType,
  Toasts,
  toast,
} from '@backpackapp-io/react-native-toast';

import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { globalToastAction } from '../../actions';

type DataToast = {
  message: string;
  title: string;
  type: 'error' | 'success' | 'warning';
};

const CustomToast = (toastType: ToastType, data: DataToast) => {
  const { id } = toastType;
  const type = data.type;
  const title = data.title;
  const message = data.message;

  return (
    <STouchable
      activeOpacity={1}
      style={styles.toastWrap}
      onPress={() => toast.dismiss(id)}
    >
      <View style={[styles.container, styles.boxCenter]}>
        {type === 'success' ? (
          <SIcon.Icon
            name="CheckIcon"
            color={colors.green.x5()}
            size={metrics.iconSize.x6}
          />
        ) : null}
        {type === 'warning' ? (
          <SIcon.Icon
            name="WarningIcon"
            color={colors.yellow.x5()}
            size={metrics.iconSize.x6}
          />
        ) : null}
        {type === 'error' ? (
          <SIcon.Icon
            name="XCircleIcon"
            color={colors.red.x5()}
            size={metrics.iconSize.x6}
          />
        ) : null}
        <Spacing space={12} vertical />

        <View style={styles.contentContainer}>
          {title ? (
            <SText.Regular
              numberOfLines={3}
              color={colors.white}
              size={metrics.isLargeScreen ? 'md' : 'sm'}
            >
              {String(title)}
            </SText.Regular>
          ) : null}
          {title && message ? <Spacing space={4} /> : null}
          {message ? (
            <>
              <SText.Regular
                numberOfLines={3}
                color={colors.white}
                size={metrics.isLargeScreen ? 'sm' : 'xs'}
              >
                {String(message)}
              </SText.Regular>
            </>
          ) : null}
        </View>

        <SIcon.Icon
          name="XIcon"
          color={colors.gray.x5(0.8)}
          size={metrics.iconSize.x6}
        />
      </View>
    </STouchable>
  );
};

function BottomToast(_: any, ref: any) {
  const insets = useSafeAreaInsets();
  const safeAreaFrame = useSafeAreaFrame();
  const dimensions = useWindowDimensions();

  const bugFixDelta =
    Math.abs(safeAreaFrame.height - dimensions.height) > 1 ? insets.bottom : 0;

  const toastInsetsReset = {
    top:
      -insets.top - 16 + Platform.select({ ios: 0, default: 32 }) + bugFixDelta,
    bottom: -insets.bottom - 16,
  };

  const currentId = React.useRef('');

  React.useImperativeHandle(ref, () => ({
    shown: shown,
  }));

  const shown = async (data: {
    message: string;
    title: string;
    type: 'error' | 'success' | 'warning';
  }) => {
    if (currentId.current) {
      toast.dismiss(currentId.current);
      currentId.current = '';
    }

    // if (data.type === 'error') {
    // hapticUtil(NotificationFeedbackType.Error);
    // } else {
    // hapticUtil(NotificationFeedbackType.Success);
    // }

    currentId.current = toast('HELLO', {
      position: ToastPosition.BOTTOM,
      id: 'MainToast',
      customToast: toastData => CustomToast(toastData, data),
      duration: 3000,
      disableShadow: true,
      isSwipeable: true,
      providerKey: 'inAppToast',
      width: metrics.screenWidth,
    });
  };

  React.useEffect(() => {
    globalToastAction.addListener('showToastAction', params => {
      shown(params as DataToast);
    });
  }, []);

  return (
    <Toasts
      providerKey="inAppToast"
      fixAndroidInsets={false}
      extraInsets={{
        top: toastInsetsReset.top,
        bottom: toastInsetsReset.bottom - (metrics.isIOS ? 24 : 0),
      }}
    />
  );
}

const styles = StyleSheet.create({
  boxCenter: {},
  container: {
    alignItems: 'center',
    backgroundColor: colors.gray.x9(),
    borderRadius: metrics.spacing.x2,
    flexDirection: 'row',
    flex: 1,
    maxWidth: metrics.limitScreenWidth - metrics.spacing.x6,
    padding: metrics.spacing.x4,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  toastWrap: {
    alignItems: 'center',
    borderRadius: metrics.radius.x3,
    padding: metrics.spacing.x4,
    width: metrics.screenWidth,
  },
});

export default React.forwardRef(BottomToast);
