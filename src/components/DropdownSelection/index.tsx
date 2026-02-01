import { RotateIcon, SText, STouchable } from '@elements';
import { basicStyles, colors, metrics } from '@themes';
import { createLayoutAnimation } from '@utils';
import React from 'react';
import { LayoutAnimation, StyleSheet, View } from 'react-native';

const layoutAnimation = createLayoutAnimation(200);

type Selection = {
  key: string;
  title: string;
};

type Props = {
  disabled?: boolean;
  selections: Array<Selection>;
  selectedKey: string;
  onSelectKey: (sortKey: string) => void;
  defaultTitle?: string;
};

export default function MovieSort(props: Props) {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  return (
    <STouchable
      disabled={props.disabled}
      style={styles.container}
      onPress={() => {
        LayoutAnimation.configureNext(layoutAnimation);
        setIsExpanded(!isExpanded);
      }}
    >
      <View style={[styles.mainItem, !isExpanded ? styles.noBottomLine : {}]}>
        <SText.Semibold>
          {props.selectedKey
            ? props.selections.find(s => s.key === props.selectedKey)?.title
            : props.defaultTitle ?? 'Select'}
        </SText.Semibold>
        <RotateIcon
          active={isExpanded}
          startDeg={'0deg'}
          endDeg={'90deg'}
          size={metrics.iconSize.x5}
        />
      </View>

      {isExpanded ? (
        <View style={styles.expandedList}>
          {props.selections.map(selection => {
            const selected = selection.key === props.selectedKey;
            return (
              <STouchable
                disabled={props.disabled}
                style={
                  selected ? styles.selectionSelectedItem : styles.selectionItem
                }
                key={selection.key}
                onPress={() => {
                  if (selected) return;
                  props.onSelectKey(selection.key);
                  LayoutAnimation.configureNext(layoutAnimation);
                  setIsExpanded(false);
                }}
              >
                <SText.Regular
                  size="sm"
                  color={selected ? colors.white : colors.black}
                >
                  {selection.title}
                </SText.Regular>
              </STouchable>
            );
          })}
        </View>
      ) : null}
    </STouchable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: metrics.lineWidth,
    borderColor: colors.gray.x4(),
    borderRadius: metrics.radius.x2,
    backgroundColor: colors.white,
    zIndex: 1,
    ...basicStyles.shadowStyle,
  },
  mainItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: metrics.spacing.x4,
    borderBottomWidth: metrics.lineWidth,
    borderColor: colors.gray.x4(),
  },
  noBottomLine: {
    borderBottomWidth: 0,
  },
  expandedList: {
    padding: metrics.spacing.x4,
    gap: metrics.spacing.x2,
  },
  selectionItem: {
    borderRadius: metrics.radius.x2,
    padding: metrics.spacing.x4,
    backgroundColor: colors.sky.x05(),
  },
  selectionSelectedItem: {
    borderRadius: metrics.radius.x1,
    padding: metrics.spacing.x4,
    backgroundColor: colors.sky.x5(),
  },
});
