import {
  Platform,
  UIManager,
  LayoutAnimation,
  /* type */ LayoutAnimationConfig,
} from 'react-native';

const defautLayoutAnimationConfig = {
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity,
  },
  delete: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
};

export default function createLayoutAnimation(
  duration: number = 200,
  animationConfig: Omit<
    LayoutAnimationConfig,
    'duration'
  > = defautLayoutAnimationConfig,
): LayoutAnimationConfig {
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return {
    duration,
    ...{ ...defautLayoutAnimationConfig, ...animationConfig },
  };
}
