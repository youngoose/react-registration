import React from 'react';
import PokemonList from '../components/PokemonList';
import { Link } from 'react-router-dom';

export default function FavoritePokemon() {
  return (
    <>
      <div>Favorite pokemon</div>
      <PokemonList />
      <Link to="/">Previous</Link>
      <Link to="/review">Save & Review</Link>
    </>
  );
}
