import metrics from './metrics';

export type FontSize =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl';

export type FontSizeMap = Record<FontSize, number>;

export const fontSizes: FontSizeMap = {
  xxs: 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 36,
};

export type LineHeightVariant = 'less' | 'normal' | 'more';

export type LineHeightMap = Record<FontSize, Record<LineHeightVariant, number>>;

export type FontVariant =
  | 'black'
  | 'bold'
  | 'heavy'
  | 'light'
  | 'medium'
  | 'regular'
  | 'semibold'
  | 'thin'
  | 'ultralight';

export type FontFamilyMap = Record<FontVariant, string>;

export const fontFamilies: FontFamilyMap = {
  black: metrics.isIOS ? 'SFProDisplay-Black' : 'SF-Pro-Display-Black',
  bold: metrics.isIOS ? 'SFProDisplay-Bold' : 'SF-Pro-Display-Bold',
  heavy: metrics.isIOS ? 'SFProDisplay-Heavy' : 'SF-Pro-Display-Heavy',
  light: metrics.isIOS ? 'SFProDisplay-Light' : 'SF-Pro-Display-Light',
  medium: metrics.isIOS ? 'SFProDisplay-Medium' : 'SF-Pro-Display-Medium',
  regular: metrics.isIOS ? 'SFProDisplay-Regular' : 'SF-Pro-Display-Regular',
  semibold: metrics.isIOS ? 'SFProDisplay-Semibold' : 'SF-Pro-Display-Semibold',
  thin: metrics.isIOS ? 'SFProDisplay-Thin' : 'SF-Pro-Display-Thin',
  ultralight: metrics.isIOS
    ? 'SFProDisplay-Ultralight'
    : 'SF-Pro-Display-Ultralight',
};

export const lineHeights: LineHeightMap = {
  xxs: {
    less: 10,
    normal: 12,
    more: 14,
  },
  xs: {
    less: 14,
    normal: 16,
    more: 18,
  },
  sm: {
    less: 19,
    normal: 20,
    more: 22,
  },
  md: {
    less: 22,
    normal: 24,
    more: 26,
  },
  lg: {
    less: 24,
    normal: 26,
    more: 28,
  },
  xl: {
    less: 26,
    normal: 28,
    more: 30,
  },
  '2xl': {
    less: 30,
    normal: 32,
    more: 34,
  },
  '3xl': {
    less: 38,
    normal: 40,
    more: 42,
  },
  '4xl': {
    less: 42,
    normal: 44,
    more: 46,
  },
};
