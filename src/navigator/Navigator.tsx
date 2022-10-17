import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SimplePokemon, HomeScreen, PokemonScreen} from '../index';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: {simplePokemon: SimplePokemon; color: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{title: 'HomeScreen'}}
      />
      <Stack.Screen
        name={'PokemonScreen'}
        component={PokemonScreen}
        options={{title: 'PokemonScreen'}}
      />
    </Stack.Navigator>
  );
};
