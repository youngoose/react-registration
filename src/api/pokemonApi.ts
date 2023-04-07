import axios from 'axios';
import { PokemonInfo } from '../components/Pokemon/Pokemon.model';

export default class PokemonApi {
  image = (id: PokemonInfo['id']) =>
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
          id: offset + index + 1,
          image: this.image(offset + index + 1),
        }))
      )
      .catch((error) => console.log(error));
  };
}
