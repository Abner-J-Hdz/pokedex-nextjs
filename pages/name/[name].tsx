import React, { useState} from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react'
import { Layout } from "../../components/layouts"
import { Pokemon, PokemonByNameAndId, pokemonByNameAndIdList, PokemonListResponse } from '../../interfaces'
import { pokeApi } from '../../api'

import {localFavorites} from '../../utils'

interface Props{
    pokemon: Pokemon
  }

const PokemonByNamePage : NextPage <Props> =  ({ pokemon }) => {

    const [isInFavorite, setIsInFavorite] = useState(localFavorites.existInFavorites(pokemon.id))

    let TextButton = isInFavorite ? "En favoritos":"Guardar en favoritos"
  
    const onToggleFavorite = () => {
      /*let idPokemon: number = +pokemon.id*/
      localFavorites.toggleFavorite( pokemon.id );
      setIsInFavorite(!isInFavorite)
      if( isInFavorite ) return;
  
    }

  return (
    <Layout title={pokemon.name} >
        <Grid.Container css={{ marginTop:'5px' }} gap={2} >
            <Grid xs={12} sm={4} >
              <Card 
                isHoverable
                css={{ padding: '30px'}}
              >
                <Card.Body>
                  <Card.Image
                    src={pokemon.sprites.other?.dream_world.front_default || ''}
                    alt={pokemon.name}
                    width="100%"
                    height={200}
                  />

                </Card.Body>
              </Card>
            </Grid>
            <Grid xs={12} sm={4}  >
              <Card>
                <Card.Header css={{display: 'flex', justifyContent: 'space-between' }}>
                    <Text h1 transform='capitalize' >{pokemon.name}</Text>
                    <Button
                      color='gradient'
                      ghost={!isInFavorite}
                      onClick={onToggleFavorite}
                    >
                      {TextButton}
                    </Button>
                </Card.Header>
                <Card.Body>
                    <Text size={30} >Sprites</Text>
                    <Container direction='row' display='flex' gap={0} >
                      <Image 
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                       />

                      <Image 
                        src={pokemon.sprites.back_default}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                       />
                      <Image 
                        src={pokemon.sprites.front_shiny}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                       />
                      <Image 
                        src={pokemon.sprites.front_shiny}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                       />                       
                    </Container>
                </Card.Body>
              </Card>
            </Grid>

        </Grid.Container>
    </Layout>
  )
}

export default PokemonByNamePage

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>(`pokemon?limit=50`);

    const pokemonName:string[] =  data.results.map( pokemon => pokemon.name);

      return {
        paths: pokemonName.map(name => (
          {
          params: {name}
          }
        )),
    
        fallback: false
      }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const {params} = ctx;
  
    const { name } = params as { name: string}
  
    const { data } = await pokeApi.get<Pokemon>(`pokemon/${name.toLocaleLowerCase()}`)
  
    return {
      props: {
        pokemon: data
      }
    }
  }