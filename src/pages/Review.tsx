import React from 'react';
import { Link } from 'react-router-dom';

export default function Review() {
  return (
    <>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
        Continue
      </button>
      <Link to="/favorite-pokemon">Previous</Link>
      <Link to="/review">Save & Review</Link>
    </>
  );
}
