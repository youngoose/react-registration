import React, { SetStateAction } from 'react';
import { BsSearch } from 'react-icons/bs';
import { PokemonInfo } from './Pokemon.model';

export default function SearchBar({
  pokemons,
  setSearchedPokemonResults,
}: {
  pokemons: PokemonInfo[];
  setSearchedPokemonResults: SetStateAction<any>;
}) {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value) {
      return setSearchedPokemonResults(pokemons);
    }
    const searchedPokemon = pokemons.filter((pokemon: PokemonInfo) =>
      pokemon.name?.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedPokemonResults(searchedPokemon);
  };

  return (
    <header className="mb-5">
      <form className="w-full flex justify-center" onSubmit={handleSearch}>
        <input
          className="w-7/12 p-2 border border-blue-900 bg-yellow-500 text-black border-double placeholder:text-blue-700 font-bold"
          type="text"
          placeholder="Search pokemon..."
          onChange={handleChange}
        />
        <button className="px-4 bg-yellow-500 border border-blue-900 font-bold">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
