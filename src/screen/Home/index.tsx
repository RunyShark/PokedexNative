/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, FlatList, ActivityIndicator, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles, usePokemonPaginated, PokemonCard} from '../../index';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemon, loadPokemon} = usePokemonPaginated();
  console.log('simplePokemon', simplePokemon);

  return (
    <>
      <Image
        source={require('../../assets/pokebola.png')}
        style={styles.pokeBoolBG}
      />
      <View
        style={{
          alignItems: 'center',
        }}>
        <FlatList
          data={simplePokemon}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <PokemonCard {...item} />}
          keyExtractor={pokemon => pokemon.id}
          onEndReached={loadPokemon}
          onEndReachedThreshold={0.4}
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                top: top + 20,
                marginBottom: top + 20,
              }}>
              Poke Dex
            </Text>
          }
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="grey" />
          }
        />
      </View>
    </>
  );
};
