import axios from 'axios';
import { PokemonInfo } from '../components/Pokemon/Pokemon.model';
import { v4 as uuidv4 } from 'uuid';

export default class PokemonApi {
  image = (id: number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  httpClient = axios.create({
    baseURL: `https://pokeapi.co/api/v2`,
  });

  getPokemon = async (offset: number, limit: number) => {
    return this.httpClient
      .get('pokemon', {
        params: {
          limit,
          offset,
        },
      })
      .then((res) =>
        res.data.results.map((pokemon: PokemonInfo, index: number) => ({
          name: pokemon.name,
          id: uuidv4(),
          image: this.image(offset + index + 1),
        }))
      )
      .catch((error) => console.log(error));
  };
}
