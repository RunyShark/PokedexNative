import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RoutesTemplate, RouteProps, SimplePokemon} from '../index';

interface RouteStackProps {
  HomeScreen: undefined;
  PokemonScreen: {
    simplePokemon: SimplePokemon;
    color: string;
  };
}

const Stack = createStackNavigator<any>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      {RoutesTemplate.map(({component, name, title}: RouteProps) => (
        <Stack.Screen
          name={name}
          component={component}
          options={{title: title}}
          key={name}
        />
      ))}
    </Stack.Navigator>
  );
};
