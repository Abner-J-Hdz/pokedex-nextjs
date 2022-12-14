import { PokemonByNameAndId } from "./pokemonByNameAndId";

export interface pokemonByNameAndIdList {
    count: number;
    next: string;
    previous?: any;
    result: PokemonByNameAndId[];
}