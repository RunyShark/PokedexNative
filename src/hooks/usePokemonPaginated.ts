import {useEffect, useRef, useState} from 'react';
import {pokemonApi, PokemonPaginatedResponse} from '../index';

export const usePokemonPaginated = () => {
  const [pokemons, setPokemons] = useState({});
  const nextPageUrl = useRef(
    'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
  );

  const loadPokemon = async () => {
    const {data} = await pokemonApi.get<PokemonPaginatedResponse>(
      nextPageUrl.current,
    );
    nextPageUrl.current = data.next;
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {};
};
