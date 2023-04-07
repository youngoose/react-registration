import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PokemonList from './PokemonList';
import { PokemonInfo } from './Pokemon.model';
import PokemonApi from '../../api/pokemonApi';
import SearchBar from './SearchBar';

export default function PokemonSearch() {
  const pokemonApi = new PokemonApi();
  const [pokemonList, setPokemonList] = useState([]);
  const [searchedPokemonResults, setSearchedPokemonResults] = useState([]);
  const limit = 50;
  const [offset, setOffset] = useState(0);

  const {
    isLoading,
    error,
    data: pokemons,
  } = useQuery(
    ['pokemons', offset],
    () => {
      const fetchedPokemon = pokemonApi
        .getPokemon(offset, limit)
        .then((initialPokemons) => {
          console.log(initialPokemons);
          setPokemonList([...pokemonList, ...initialPokemons] as any);
          setSearchedPokemonResults([
            ...pokemonList,
            ...initialPokemons,
          ] as any);
          return initialPokemons;
        });
      return fetchedPokemon;
    },
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <>
      <SearchBar
        pokemons={pokemonList}
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
      <button
        onClick={() => {
          setOffset(offset + limit);
        }}
      >
        Show more
      </button>
    </>
  );
}
