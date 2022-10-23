/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../../index';

import {styles} from './SearchStyle';

export const SearhScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.container,
        marginTop: Platform.OS === 'ios' ? top : top + 10,
        marginHorizontal: 20,
      }}>
      <SearchInput />
    </View>
  );
};
