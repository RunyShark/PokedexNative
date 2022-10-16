import React from 'react';
import {Image, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../../index';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <>
      <Image
        source={require('../../assets/pokebola.png')}
        style={styles.pokeBoolBG}
      />
      <Text
        style={{
          ...styles.title,
          top: top + 20,
        }}>
        Poke Dex
      </Text>
    </>
  );
};
