import { metrics } from '../themes';
import { View, ViewStyle } from 'react-native';

type Props = {
  space?: number;
  vertical?: boolean;
  style?: ViewStyle;
};

export default function Spacing({
  space = metrics.spacing.x2, // default 8px
  vertical = false, // default horizontal
  style,
}: Props) {
  if (vertical) {
    return <View style={[{ width: space }, style]} />;
  }
  return <View style={[{ height: space }, style]} />;
}
