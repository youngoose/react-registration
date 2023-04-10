import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PokemonApiProvider } from '../context/PokemonApiContext';

const queryClient = new QueryClient();

export default function Root() {
  return (
    <>
      <Navbar />
      <PokemonApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </PokemonApiProvider>
    </>
  );
}
