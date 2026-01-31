import { STouchable } from '@elements';
import { ScreenTabParamsType, TabParamsType } from '@navigation/Tabs';
import { TInitialParams } from '@navigation/types';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { basicStyles, colors, metrics } from '@themes';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = BottomTabBarProps & {
  params: TInitialParams<ScreenTabParamsType, TabParamsType>;
};

TabBarComponent.HEIGHT = metrics.bottomTabHeight;
function TabBarComponent({ params, ...props }: Props) {
  const routes = props.state?.routes || [];
  const index = props.state?.index || 0;

  const onPressTab = (routeName: string) => {
    props.navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      {routes.map((route, routeIndex) => {
        const routeName = route?.name;
        const tabBarOption = Object.entries(params).find(
          ([key]) => key === routeName,
        );
        const option = tabBarOption?.[1];
        const isSelected = index === routeIndex;

        return (
          <STouchable
            activeOpacity={1}
            style={basicStyles.flex}
            key={String(routeName)}
            disabled={isSelected}
            onPress={() => onPressTab(routeName)}
          >
            <View style={styles.tabItemStyle}>
              <View style={basicStyles.center}>
                {isSelected ? option?.iconActive : option?.icon}
              </View>
            </View>
          </STouchable>
        );
      })}
    </View>
  );
}

export default TabBarComponent;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: metrics.lineWidth,
    flexDirection: 'row',
    height: TabBarComponent.HEIGHT,
  },
  tabItemStyle: {
    backgroundColor: colors.sky.x9(),
    flex: 1,
    paddingTop: metrics.spacing.x4,
  },
});
