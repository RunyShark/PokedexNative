import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RoutesTemplate, RouteProps} from '../index';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      {RoutesTemplate.map(({component, name, title}: RouteProps) => (
        <Stack.Screen
          name={name}
          component={component}
          options={{title: title}}
        />
      ))}
    </Stack.Navigator>
  );
};
