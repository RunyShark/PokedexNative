import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../index';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = (props: Props) => {
  const {
    simplePokemon: {id, name, picture},
  } = props.route.params;
  return (
    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{picture}</Text>
    </View>
  );
};
