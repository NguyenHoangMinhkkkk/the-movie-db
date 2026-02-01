import { SIcon, STextInput, STouchable } from '@elements';
import { basicStyles, colors, metrics } from '@themes';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  onSearchTextChange: (text: string) => void;
};

export default function SearchBox(props: Props) {
  const [searchText, setSearchText] = React.useState<string>('');

  return (
    <View style={styles.container}>
      <SIcon.Icon size={metrics.iconSize.x6} name="MagnifyingGlassIcon" />
      <STextInput.Semibold
        style={styles.textInput}
        value={searchText}
        placeholder="Search..."
        onChangeText={text => {
          setSearchText(text);
          props.onSearchTextChange(text);
        }}
      />
      {searchText ? (
        <STouchable
          onPress={() => {
            setSearchText('');
            props.onSearchTextChange('');
          }}
        >
          <SIcon.Icon size={metrics.iconSize.x6} name="XIcon" />
        </STouchable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: metrics.spacing.x4,
    alignItems: 'center',
    borderWidth: metrics.lineWidth,
    borderColor: colors.gray.x4(),
    borderRadius: metrics.radius.x2,
    backgroundColor: colors.white,
    zIndex: 1,
    ...basicStyles.shadowStyle,
  },
  textInput: { flex: 1, padding: metrics.spacing.x4 },
});
