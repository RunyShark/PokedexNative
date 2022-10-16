/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useRef, useState} from 'react';
import {
  pokemonApi,
  PokemonPaginatedResponse,
  Result,
  SimplePokemon,
} from '../index';

export const usePokemonPaginated = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [simplePokemon, setSimplePokemon] = useState<SimplePokemon[]>([]);
  const nextPageUrl = useRef(
    'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
  );

  const loadPokemon = async () => {
    setIsLoading(true);
    const {
      data: {next, results},
    } = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
    nextPageUrl.current = next;
    mapPokemonListToSimplePokemon(results);
    setIsLoading(false);
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
    setSimplePokemon([...simplePokemon, ...newPokemonList]);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoading,
    simplePokemon,
    loadPokemon,
  };
};
