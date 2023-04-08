import React, { SetStateAction, useState } from 'react';
import { PokemonInfo } from './Pokemon.model';

export default function PokemonList({
  pokemon,
  onFavoriteChange,
  index,
}: {
  pokemon: PokemonInfo;
  onFavoriteChange: SetStateAction<any>;
  index: number;
}) {
  const [favoriteChecked, setFavoriteChecked] = useState(true);
  const { name, image } = pokemon;

  const handleChange = () => {
    onFavoriteChange(pokemon);
    setFavoriteChecked(false);
  };

  return (
    <>
      {favoriteChecked && (
        <div
          className="border border-blue-900 bg-yellow-500 rounded-xl"
          onClick={handleChange}
        >
          <li className="flex flex-col items-center text-blue-900 text-center hover:bg-basic active:bg-basic rounded-xl pb-1 font-bold">
            <img className="" src={image} alt={name} />
            <label htmlFor={name}>
              {index + 1}. {name}
            </label>
          </li>
        </div>
      )}
    </>
  );
}
