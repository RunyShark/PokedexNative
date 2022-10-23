/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {PokemonFull} from '../../interfaces';
import {FadeInImage} from '../FadeInImage';
import {styles} from './PokemonDetailsStyle';
interface PokemonDetailsProps extends PokemonFull {}

export const PokemonDetails = ({
  types,
  weight,
  sprites,
  abilities,
}: PokemonDetailsProps) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      <View
        style={{
          ...styles.container,
          marginTop: 400,
        }}>
        <Text style={styles.title}>Type:</Text>
        <View style={styles.containerType}>
          {types.map(({type: {name}}) => (
            <Text
              key={name}
              style={{
                ...styles.regularText,
                marginRight: 10,
              }}>
              {name}
            </Text>
          ))}
        </View>
        <View
          style={{
            ...styles.regularText,
            marginRight: 20,
          }}>
          <Text style={styles.title}>Peso</Text>
          <Text style={styles.regularText}>{weight}lb</Text>
        </View>
        <View
          style={{
            ...styles.regularText,
            marginRight: 20,
          }}>
          <Text style={styles.title}>Sprite</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            //style={styles.}
          >
            <FadeInImage
              uri={sprites.front_default}
              style={styles.basicSprite}
            />
            <FadeInImage
              uri={sprites.back_default}
              style={styles.basicSprite}
            />
            <FadeInImage uri={sprites.front_shiny} style={styles.basicSprite} />
            <FadeInImage uri={sprites.back_shiny} style={styles.basicSprite} />
          </ScrollView>
          <View
            style={{
              ...styles.regularText,
              marginRight: 20,
            }}>
            <Text style={styles.title}>Skills</Text>
            <View style={styles.containerType}>
              {abilities.map(({ability: {name}}) => (
                <Text
                  key={name}
                  style={{
                    ...styles.regularText,
                    marginRight: 10,
                  }}>
                  {name}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
