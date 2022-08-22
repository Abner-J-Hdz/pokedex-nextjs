import { Grid } from '@nextui-org/react';
import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import PokemonCard from '../components/pokemon/PokemonCard';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props{
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({pokemons}) => {

  return (
    <Layout title="Listado de pokemon" >
      <Grid.Container gap={2} justify="center">
        {
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </Grid.Container>
    </Layout>
  );
};


///solo se ejecuta en build time y en desarrollo  
//siempre y cuando se sepa que valores se van a cagar predeterminadamente
export const getStaticProps: GetStaticProps = async (ctx) => {
  ////tipado de nuestra respuesta
  const {data} = await pokeApi.get<PokemonListResponse>('pokemon?limit=160')
  ///url image = https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png
  const pokemons : SmallPokemon[] = data.results.map((poke, index) => ({
    ...poke,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }));


  ///aqui definimos las propiedades que va a recibir nuestra pagina, datos los cuales son predeterminados
  return {

    props: {
      pokemons
    }
  }
}

export default HomePage
