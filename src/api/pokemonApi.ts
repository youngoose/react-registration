import axios from 'axios';
import { PokemonInfo } from '../components/Pokemon/Pokemon.model';

export default class PokemonApi {
  // private readonly mockUrl = '/pokemon/pokemon.json';
  private readonly limit = 1000;

  image = (id: PokemonInfo['id']) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  httpClient = axios.create({
    baseURL: `https://pokeapi.co/api/v2`,
  });

  async getPokemon() {
    console.log('fetching...');
    return this.httpClient
      .get('pokemon', {
        params: {
          limit: this.limit,
        },
      })
      .then((res) =>
        res.data.results.map((pokemon: PokemonInfo, index: number) => ({
          name: pokemon.name,
          id: index + 1,
          image: this.image(index + 1),
        }))
      )
      .catch((error) => console.log(error));
  }
}
