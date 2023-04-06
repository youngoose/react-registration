import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PokemonList from './PokemonList';
import { PokemonInfo } from './Pokemon.model';
import PokemonApi from '../../api/pokemonApi';
import SearchBar from './SearchBar';

export default function PokemonSearch() {
  const pokemonApi = new PokemonApi();
  const [searchedPokemonResults, setSearchedPokemonResults] = useState([]);
  const {
    isLoading,
    error,
    data: pokemons,
  } = useQuery(
    ['pokemons'],
    () => {
      const fetchedPokemonData = pokemonApi.getPokemon();
      fetchedPokemonData.then((pokemons) => {
        setSearchedPokemonResults(pokemons);
      });
      return fetchedPokemonData;
    },
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <>
      <SearchBar
        pokemons={pokemons}
        setSearchedPokemonResults={setSearchedPokemonResults}
      />
      <>
        {isLoading && <p>Loading...</p>}
        {error && <p>Something is wrong 😖</p>}
        <ul className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-3 gap-y-4 mx-4">
          {searchedPokemonResults &&
            searchedPokemonResults.map((pokemon: PokemonInfo) => (
              <PokemonList pokemon={pokemon} key={pokemon.id} />
            ))}
        </ul>
      </>
    </>
  );
}
