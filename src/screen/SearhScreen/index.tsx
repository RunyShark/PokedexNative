/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, Platform, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput, usePokemonSearch} from '../../index';

import {styles} from './SearchStyle';

export const SearhScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemon} = usePokemonSearch();

  if (isFetching) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size={50} color="grey" />
        <Text>Login...</Text>
      </View>
    );
  }

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
