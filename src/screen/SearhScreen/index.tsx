/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Platform, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Loading,
  PokemonCard,
  SearchInput,
  SimplePokemon,
  usePokemonSearch,
} from '../../index';

import {styles} from './SearchStyle';

const {width: screenWidth} = Dimensions.get('window');

export const SearhScreen = () => {
  const [pokemonFilter, setPokemonFilter] = useState<SimplePokemon[]>([]);
  const [term, setTerm] = useState('');
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemon} = usePokemonSearch();

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFilter([]);
    }

    if (isNaN(Number(term))) {
      setPokemonFilter(
        simplePokemon.filter(poke =>
          poke.name.toLowerCase().includes(term.toLowerCase()),
        ),
      );
    } else {
      const pokemon = simplePokemon.find(poke => poke.id === term);

      setPokemonFilter(pokemon ? [pokemon] : []);
    }
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        ...styles.container,
      }}>
      <SearchInput
        onDebone={value => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 10,
          marginHorizontal: 20,
        }}
      />
      <FlatList
        data={pokemonFilter}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <PokemonCard {...item} />}
        keyExtractor={pokemon => pokemon.id}
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              top: top + 50,
              marginBottom: top + 60,
              marginHorizontal: 20,
            }}>
            Search {term}
          </Text>
        }
      />
    </View>
  );
};
