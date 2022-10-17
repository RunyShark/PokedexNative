import React from 'react';
import {Text, View} from 'react-native';
import {SimplePokemon} from '../../interfaces';

interface PokemonProps extends SimplePokemon {}

export const PokemonScreen = ({}: PokemonProps) => {
  return (
    <View>
      <Text>PokemonScreen</Text>
    </View>
  );
};
