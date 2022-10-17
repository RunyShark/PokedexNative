/* eslint-disable curly */
import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import ImageColors from 'react-native-image-colors';
import {styles} from './PokeCardStyle';
import {SimplePokemon, FadeInImage} from '../../index';
import {useNavigation} from '@react-navigation/native';
interface PokemonCardProps extends SimplePokemon {}

const windowsWidth = Dimensions.get('window').width;

export const PokemonCard = ({name, id, picture, color}: PokemonCardProps) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);
  const {navigate} = useNavigation();

  useEffect(() => {
    ImageColors.getColors(picture, {fallback: 'grey'}).then(colors => {
      if (!isMounted.current) return;
      colors.platform === 'android'
        ? setBgColor(colors.dominant || 'grey')
        : setBgColor('grey');
    });
    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigate('PokemonScreen', {
          simplePokemon: {name, id, picture, color},
          color,
        })
      }>
      <View
        style={{
          ...styles.cardContainer,
          width: windowsWidth * 0.4,
          backgroundColor: bgColor,
        }}>
        <View>
          <Text style={styles.namePokemon}>
            {name}
            {'\n#' + id}
          </Text>
        </View>
        <View style={styles.pokebolaContainer}>
          <Image
            style={styles.Pokebola}
            source={require('../../assets/pokebola-blanca.png')}
          />
        </View>

        <FadeInImage uri={picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};
