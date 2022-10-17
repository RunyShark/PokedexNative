/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {pokemonApi, PokemonFull} from '../index';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [detailsPokemon, setDetailsPokemon] = useState<PokemonFull>(
    {} as PokemonFull,
  );
  console.log('id', detailsPokemon);

  const getPokemonDetail = async () => {
    const {data} = await pokemonApi.get<PokemonFull>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );

    setDetailsPokemon(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonDetail();
  }, []);

  return {
    ...detailsPokemon,
    isLoading,
    getPokemonDetail,
  };
};
