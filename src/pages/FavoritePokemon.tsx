import React from 'react';
import PokemonSearch from '../components/Pokemon/PokemonSearch';
import { Link } from 'react-router-dom';

export default function FavoritePokemon() {
  return (
    <>
      <div>Favorite pokemon</div>
      <PokemonSearch />
      <Link to="/">Previous</Link>
      <Link to="/review">Save & Review</Link>
    </>
  );
}
