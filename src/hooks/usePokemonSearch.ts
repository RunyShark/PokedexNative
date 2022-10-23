/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {
  pokemonApi,
  PokemonPaginatedResponse,
  Result,
  SimplePokemon,
} from '../index';

export const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [simplePokemon, setSimplePokemon] = useState<SimplePokemon[]>([]);

  const loadPokemon = async () => {
    const {
      data: {results},
    } = await pokemonApi.get<PokemonPaginatedResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=1200',
    );

    mapPokemonListToSimplePokemon(results);
  };

  const mapPokemonListToSimplePokemon = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(
      ({name, url}: Result) => {
        const urlPArts = url.split('/');
        const id = urlPArts[urlPArts.length - 2];
        const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        return {
          id,
          picture,
          name,
        };
      },
    );
    setSimplePokemon(newPokemonList);
    setIsFetching(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isFetching,
    simplePokemon,
  };
};
