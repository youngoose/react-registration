import React from 'react';
import { PokemonInfo } from '../model/Pokemon.model';

export default function PokemonCard({ pokemon }: { pokemon: PokemonInfo }) {
  const { name, id, image } = pokemon;

  return (
    <li>
      <img src={image} alt={name} />
      <div>
        {id}. {name}
      </div>
    </li>
  );
}
