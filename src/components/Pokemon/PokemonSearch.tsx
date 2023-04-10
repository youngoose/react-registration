import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PokemonList from './PokemonList';
import { PokemonInfo } from './Pokemon.model';
import SearchBar from './SearchBar';
import Button from '../ui/Button';
import PrevNextButton from '../ui/PrevNextButton';
import useSetUserState from '../../hooks/useSetUserState';
import getStatesFromLocalStorage from '../../util/getStatesFromLocalStorage';
import { useLocation } from 'react-router-dom';
import { usePokemonApi } from '../../context/PokemonApiContext';

export default function PokemonSearch() {
  const { pokemonApi } = usePokemonApi();
  const location = useLocation();
  const [pokemonList, setPokemonList] = useState([]);
  const [searchedPokemonResults, setSearchedPokemonResults] = useState([]);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(() => {
    const favoritePokemon: PokemonInfo =
      getStatesFromLocalStorage('favoritePokemon');
    return Object.keys(favoritePokemon).length > 0 ? true : false;
  });
  const limit = 50;
  const [offset, setOffset] = useState(0);
  const [favoritePokemon, setFavoritePokemon] = useState<PokemonInfo>(() =>
    getStatesFromLocalStorage('favoritePokemon')
  );

  const {
    isLoading,
    error,
    data: pokemons,
  } = useQuery(
    ['pokemons', offset, location],
    () => {
      const fetchedPokemon = pokemonApi
        .getPokemon(offset, limit)
        .then((initialPokemons: PokemonInfo[]) => {
          setPokemonList([...pokemonList, ...initialPokemons] as any);
          setSearchedPokemonResults([
            ...pokemonList,
            ...initialPokemons,
          ] as any);
          return initialPokemons;
        });
      return fetchedPokemon;
    },
    {
      enabled: !!pokemonList,
      staleTime: 10 * 60 * 1000,
    }
  );

  const onChange = (favoritePokemon: PokemonInfo) => {
    setFavoritePokemon(favoritePokemon);
    setIsSubmitSuccessful(true);
  };

  useSetUserState('favoritePokemon', favoritePokemon);

  return (
    <>
      {Object.keys(favoritePokemon).length > 0 && (
        <div className="relative">
          <div className="flex justify-center ">
            <img
              className="h-[150px]"
              src="/images/pokeCatch.png"
              alt="pokemon catch icon"
            />
            <img
              className="absolute h-30 w-30 top-[20px]"
              src={favoritePokemon.image}
              alt={favoritePokemon.name}
            />
          </div>

          <div className="flex flex-col items-center justify-center my-5">
            <pre>Your favorite pokemon is...</pre>
            <strong className="text-blue-600 text-2xl text-bold bg-yellow-500">
              {favoritePokemon.name}
            </strong>
          </div>

          <div className="flex justify-center">
            <Button
              customStyle={
                'bg-basic hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2'
              }
              text={'Search again?'}
              onClick={() => {
                setFavoritePokemon({});
                setSearchedPokemonResults(pokemonList);
                setIsSubmitSuccessful(false);
              }}
            />
          </div>
        </div>
      )}

      {Object.keys(favoritePokemon).length === 0 && (
        <>
          <div className="flex flex-col items-center justify-center">
            <div className="inline-flex items-center">
              <img
                className="h-10"
                src="/images/pokeCatch.png"
                alt="pokemon catch icon"
              />
              <span className="ml-2 text-lg text-blue-900">
                Select Your Favorite pokemon with
              </span>

              <img
                className="ml-2 h-10"
                src="/images/pokeCatch.png"
                alt="pokemon catch icon"
              />
            </div>

            <a
              href="https://pokeapi.co/"
              className="w-[200px] h-[200px] -m-[60px]"
            >
              <img src="/images/pokeLogo.png" alt="pokemon api logo" />
            </a>
          </div>

          <SearchBar
            pokemons={pokemons}
            setSearchedPokemonResults={setSearchedPokemonResults}
          />
          <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong 😖</p>}
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 gap-y-4 mx-4">
              {searchedPokemonResults &&
                searchedPokemonResults.map(
                  (pokemon: PokemonInfo, index: number) => (
                    <PokemonList
                      key={index}
                      pokemon={pokemon}
                      onFavoriteChange={onChange}
                      index={pokemon.id}
                    />
                  )
                )}
            </ul>
          </>

          <div className="flex justify-center mt-5">
            <Button
              customStyle={
                'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-[120px]'
              }
              text={'Show more'}
              onClick={() => {
                offset + limit === 1000
                  ? alert('Sorry, currently up to 1000 Pokemons available!')
                  : setOffset(offset + limit);
              }}
            />
          </div>
        </>
      )}

      <PrevNextButton onSuccessSubmit={isSubmitSuccessful} />
    </>
  );
}
