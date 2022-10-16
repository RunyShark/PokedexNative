/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, FlatList, ActivityIndicator} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles, usePokemonPaginated, FadeInImage} from '../../index';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, simplePokemon, loadPokemon} = usePokemonPaginated();
  console.log('simplePokemon', simplePokemon);

  return (
    <>
      <Image
        source={require('../../assets/pokebola.png')}
        style={styles.pokeBoolBG}
      />
      <FlatList
        data={simplePokemon}
        showsVerticalScrollIndicator={false}
        renderItem={({item: {picture}}) => (
          <FadeInImage uri={picture} style={{width: 100, height: 100}} />
        )}
        keyExtractor={pokemon => pokemon.id}
        onEndReached={loadPokemon}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color="grey" />
        }
      />
      {/* <Text
        style={{
          ...styles.title,
          top: top + 20,
        }}>
        Poke Dex
      </Text> */}
    </>
  );
};
