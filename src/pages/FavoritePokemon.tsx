import React from 'react';
import { Link } from 'react-router-dom';

export default function FavoritePokemon() {
  return (
    <>
      <div>Favorite pokemon</div>
      <Link to="/">Previous</Link>
      <Link to="/review">Save & Review</Link>
    </>
  );
}
