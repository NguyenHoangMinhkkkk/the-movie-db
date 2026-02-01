import { ScreenParams, TInitialParams } from '@navigation/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import DetailMovieScreen, {
  RouteType as DetailMovieScreenRouteType,
} from './DetailMovie';

export type ScreenParamsType = {
  detailMovieScreen: ScreenParams<DetailMovieScreenRouteType>;
};

export const initialParams: TInitialParams<ScreenParamsType> = {
  detailMovieScreen: {},
};

const NativeStack = createNativeStackNavigator<ScreenParamsType>();

export default () => {
  return (
    <>
      <NativeStack.Screen
        name="detailMovieScreen"
        component={DetailMovieScreen}
        initialParams={initialParams.detailMovieScreen}
      />
    </>
  );
};
