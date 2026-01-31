import { basicStyles, colors, metrics } from '@themes';
import React from 'react';
import { Image, ColorValue, View, ImageProps } from 'react-native';
import { IconElementProps, SIcon } from '@elements';

type Props = ImageProps & {
  placeholderIcon?: IconElementProps['name'];
  placeholderIconColor?: string | ColorValue;
};

function SImage(props: Props) {
  const [isError, setIsError] = React.useState(false);
  const sourceRef = React.useRef(props.source);

  React.useEffect(() => {
    if (props.source !== sourceRef.current && isError) {
      setIsError(false);
    }
    sourceRef.current = props.source;
  }, [props.source, isError]);

  const getSize = (): number => {
    const styleObj = Array.isArray(props.style)
      ? Object.assign({}, ...props.style)
      : props.style ?? {};
    let size = styleObj?.width ?? styleObj?.height;
    size = size ? size * 0.5 : metrics.iconSize.x6;
    return Math.min(size, 50);
  };

  if (isError) {
    return (
      <View
        style={[
          basicStyles.center,
          { backgroundColor: colors.gray.x05() },
          props.style,
        ]}
      >
        <SIcon.Icon
          name={props.placeholderIcon ? props.placeholderIcon : 'ImageIcon'}
          size={getSize()}
          color={
            props.placeholderIconColor
              ? props.placeholderIconColor
              : colors.gray.x3()
          }
        />
      </View>
    );
  }

  return (
    <Image
      {...props}
      style={[{ backgroundColor: colors.gray.x05() }, props.style]}
      onError={e => {
        setIsError(true);
        props.onError?.(e);
      }}
      onLoad={e => {
        setIsError(false);
        props.onLoad?.(e);
      }}
    />
  );
}
export default React.memo<Props>(SImage, (prevProps, nextProps) => {
  return prevProps.source === nextProps.source;
});
