import React from 'react';
import { PokemonInfo } from './Pokemon.model';

export default function PokemonList({ pokemon }: { pokemon: PokemonInfo }) {
  const { name, id, image } = pokemon;

  return (
    <li className="flex flex-col items-center bg-gray-100 text-gray-800 text-center rounded-lg shadow-sm hover:shadow-md w-30 h-[130px]">
      <img className="h-30 w-30" src={image} alt={name} />
      <h2>
        {id}. {name}
      </h2>
    </li>
  );
}
