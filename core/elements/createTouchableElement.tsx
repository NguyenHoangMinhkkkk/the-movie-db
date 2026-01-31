// import * as Haptics from 'expo-haptics';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

// No need Haptic for now

export default function () {
  return function HapticTouch(
    props: TouchableOpacityProps & {
      isHapticDisable?: boolean;
      // hapticType?:
      //   | Haptics.ImpactFeedbackStyle
      //   | Haptics.ImpactFeedbackStyle
      //   | 'selection';
    },
  ) {
    // let onPressIn = () => {};
    // if (!props.isHapticDisable && !!props?.onPress) {
    // onPressIn = () => {
    // hapticUtil(props.hapticType ?? Haptics.ImpactFeedbackStyle.Soft);
    // };
    // }
    return (
      <TouchableOpacity
        {...props}
        //  onPressIn={onPressIn}
        activeOpacity={0.8}
      >
        {props.children}
      </TouchableOpacity>
    );
  };
}
