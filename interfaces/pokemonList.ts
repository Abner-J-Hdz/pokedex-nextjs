//nota las interface solo nos ayuda a que nuestra data lusca de una 
//manera, sin embargo no quiere decir que escritctamente tiene que ser asi
//a diferencia de una clase

export interface PokemonListResponse {
    count:    number;
    next:     string;
    previous?: string;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    id:   number,
    img:  string
}
