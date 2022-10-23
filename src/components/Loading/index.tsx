import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {styles} from './SearchStyle';

export const Loading = () => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size={50} color="grey" />
      <Text>Login...</Text>
    </View>
  );
};
