import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { PokemonInfo } from './Pokemon.model';

export default function SearchBar({
  pokemons,
  setSearchedPokemonResults,
}: {
  pokemons: PokemonInfo[];
  setSearchedPokemonResults: any;
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
    <header>
      <form className="w-full flex justify-center" onSubmit={handleSearch}>
        <input
          className="w-7/12 p-2 border-none outline-none bg-black text-gray-50"
          type="text"
          placeholder="Search pokemon..."
          onChange={handleChange}
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
