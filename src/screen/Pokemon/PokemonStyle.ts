import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  hederContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
  },
  backBtn: {
    position: 'absolute',
    left: 20,
  },
  PokeName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokebola: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -20,
  },
  pokemonImageBtn: {
    width: 100,
    height: 100,

    position: 'absolute',
    bottom: -200,
    left: 150,
  },
  detail: {},
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    height: 200,
  },
});
