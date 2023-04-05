import axios from 'axios';
import { PokemonInfo } from '../model/Pokemon.model';

export default class PokemonApi {
  // private readonly mockUrl = '/pokemon/pokemon.json';
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=150';
  image = (id: PokemonInfo['id']) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  async getPokemon() {
    console.log('fetching...');

    try {
      return axios.get(this.baseUrl).then((res) =>
        res.data.results.map((pokemon: PokemonInfo, index: number) => ({
          name: pokemon.name,
          id: index + 1,
          image: this.image(index + 1),
        }))
      );
    } catch (error) {
      console.error(error);
    }
  }
}
