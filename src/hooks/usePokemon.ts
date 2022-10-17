import {useState} from 'react';
import {pokemonApi, PokemonFull} from '../index';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [detailsPokemon, setDetailsPokemon] = useState<PokemonFull>(
    {} as PokemonFull,
  );

  const getPokemonDetail = async () => {
    const {data} = await pokemonApi.get<PokemonFull>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setDetailsPokemon(data);
    setIsLoading(false);
  };

  return {
    ...detailsPokemon,
    isLoading,
    getPokemonDetail,
  };
};
