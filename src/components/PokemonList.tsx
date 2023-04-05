import React from 'react';
import { PokemonInfo } from '../model/Pokemon.model';
import { useQuery } from '@tanstack/react-query';
import PokemonApi from '../api/pokemonApi';
import PokemonCard from './PokemonCard';

export default function PokemonList() {
  const pokemonApi = new PokemonApi();

  const {
    isLoading,
    error,
    data: pokemon,
  } = useQuery(
    ['pokemons'],
    () => pokemonApi.getPokemon(), // prevent refetching for 5 mins
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      <ul>
        {pokemon &&
          pokemon.map((pokemon: PokemonInfo) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
      </ul>
    </>
  );
}
