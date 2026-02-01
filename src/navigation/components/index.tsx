import React from 'react';
import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import CustomNavHeader from './CustomNavHeader';

function createNavHeader(
  headerTitle?: string,
  backButton?: boolean,
): Partial<NativeStackNavigationOptions> {
  return {
    header: (props: NativeStackHeaderProps) => (
      <CustomNavHeader
        {...props}
        {...(headerTitle ? { headerTitle } : {})}
        backButton={backButton}
      />
    ),
  };
}

export { createNavHeader };
