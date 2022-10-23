/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Platform, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Loading, PokemonCard, SearchInput, usePokemonSearch} from '../../index';

import {styles} from './SearchStyle';

export const SearhScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemon} = usePokemonSearch();

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        ...styles.container,
        marginTop: Platform.OS === 'ios' ? top : top + 10,
      }}>
      <SearchInput />
      <FlatList
        data={simplePokemon}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <PokemonCard {...item} />}
        keyExtractor={pokemon => pokemon.id}
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              top: top + 20,
              marginBottom: top + 20,
            }}>
            Search Pokemon
          </Text>
        }
      />
    </View>
  );
};
