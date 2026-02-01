import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';

import { ScreenParams, TInitialParams } from '../types';

import { SIcon } from '@elements';
import { colors, metrics } from '@themes';
import { TabBarComponent } from '@components';
import HomeTab from './screens/HomeTab';
import WatchListTab from './screens/WatchListTab';

export type TabParamsType = {
  icon?: React.ReactNode;
  iconActive?: React.ReactNode;
  tabTitle?: string;
};

export type ScreenTabParamsType = {
  homeTab: ScreenParams<TabParamsType>;
  watchListTab: ScreenParams<TabParamsType>;
};

export const TabInitialParams: TInitialParams<
  ScreenTabParamsType,
  TabParamsType
> = {
  homeTab: {
    tabTitle: 'Home',
    icon: (
      <SIcon.Icon
        name="HouseIcon"
        weight="fill"
        color={colors.whiteA(0.4)}
        size={metrics.iconSize.x6}
      />
    ),
    iconActive: (
      <SIcon.Icon
        name="HouseIcon"
        weight="fill"
        color={colors.white}
        size={metrics.iconSize.x6}
      />
    ),
  },
  watchListTab: {
    tabTitle: 'Watch List',
    icon: (
      <SIcon.Icon
        name="BookmarkIcon"
        weight="fill"
        color={colors.whiteA(0.4)}
        size={metrics.iconSize.x6}
      />
    ),
    iconActive: (
      <SIcon.Icon
        name="BookmarkIcon"
        weight="fill"
        color={colors.white}
        size={metrics.iconSize.x6}
      />
    ),
  },
};

const TabStack = createBottomTabNavigator<ScreenTabParamsType>();

export default function TabNavigator() {
  const renderTabbar = (props: BottomTabBarProps) => (
    <TabBarComponent {...props} params={TabInitialParams} />
  );

  return (
    <TabStack.Navigator
      screenOptions={{ lazy: true }}
      initialRouteName="homeTab"
      tabBar={renderTabbar}
    >
      <TabStack.Screen
        name="homeTab"
        component={HomeTab}
        options={{ headerShown: false }}
        initialParams={TabInitialParams.homeTab}
      />
      <TabStack.Screen
        name="watchListTab"
        component={WatchListTab}
        options={{ headerShown: false }}
        initialParams={TabInitialParams.watchListTab}
      />
    </TabStack.Navigator>
  );
}
