import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SearhScreen, Navigator} from '../index';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Navigator" component={Navigator} />
      <Tab.Screen name="SearhScreen" component={SearhScreen} />
    </Tab.Navigator>
  );
};
