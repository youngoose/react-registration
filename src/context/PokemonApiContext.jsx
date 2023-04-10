import { createContext, useContext } from 'react';
import PokemonApi from '../api/pokemonApi';

export const PokemonApiContext = createContext();

export function PokemonApiProvider({ children }) {
  const pokemonApi = new PokemonApi();

  return (
    <PokemonApiContext.Provider value={{ pokemonApi }}>
      {children}
    </PokemonApiContext.Provider>
  );
}

export const usePokemonApi = () => useContext(PokemonApiContext);
