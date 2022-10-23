/* eslint-disable react-native/no-inline-styles */
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  RootStackParams,
  FadeInImage,
  usePokemon,
  PokemonDetails,
} from '../../index';
import {styles} from './PokemonStyle';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const {top} = useSafeAreaInsets();
  const {
    color,
    simplePokemon: {id, name, picture},
  } = route.params;
  const {sprites, isLoading, detailsPokemon} = usePokemon(id);
  console.log('front_default', sprites?.front_default);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          ...styles.hederContainer,
          backgroundColor: color,
        }}>
        <TouchableOpacity
          style={{...styles.backBtn, top: top + 10}}
          onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" color="white" size={35} />
        </TouchableOpacity>
        <Text
          style={{
            ...styles.PokeName,
            top: top + 40,
          }}>
          {name + '\n'}#{id}
        </Text>

        <Image
          source={require('../../assets/pokebola-blanca.png')}
          style={styles.pokebola}
        />
        <FadeInImage uri={picture} style={styles.pokemonImage} />
        <FadeInImage
          uri={sprites?.front_default}
          style={styles.pokemonImageBtn}
        />
      </View>
      {isLoading ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetails {...detailsPokemon} />
      )}
    </View>
  );
};
