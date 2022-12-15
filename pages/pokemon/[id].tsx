import React, { FC, useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Layout } from '../../components/layouts'
import { pokeApi } from '../../api'
import { Pokemon, PokemonListResponse } from '../../interfaces'
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react'
import {getPokemonInfo, localFavorites} from '../../utils'
import confetti from 'canvas-confetti'

interface Props{
  pokemon: Pokemon
}

const PokemonPage: NextPage <Props> = ({ pokemon }) => {

  const [isInFavorite, setIsInFavorite] = useState(localFavorites.existInFavorites(pokemon.id))

  let TextButton = isInFavorite ? "En favoritos":"Guardar en favoritos"

  const onToggleFavorite = () => {
    /*let idPokemon: number = +pokemon.id*/
    localFavorites.toggleFavorite( pokemon.id );
    setIsInFavorite(!isInFavorite)
    if( isInFavorite ) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })

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

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
///ESTO POR QUE SABEMOS QUE SOLO VAMOS A USAR 151 Y NO MAS
  const pokemons151 = [...Array(160)].map((value, index) =>`${index + 1}` )
  
  return {
    paths: pokemons151.map(id => (
      {
      params: {id}
      }
    )),

    // paths: [
    //   {
    //     params: { id: '1'}
    //   }
    // ],
    fallback: false
  }
  /* fallback : 'blocking' deja entrar a la pagina aunque la pagina no 
  haya sido previamente renderizada o mejor dicho si no estoy pasando un params dentro de los params que estoy enviando
  pues dejalo pasar
  params: {
        id: '1'
      }
  si solo paso eso(en los params),  pero en fallback : 'blocking'  si paso en la url 120 por ejemplo me va a dejar pasar a la pagina

  fallback : false, lo que hace es que  me va a retornar un 404 si paso un id que no está dentro de los params que estoy pasando

  */
}

export const getStaticProps: GetStaticProps = async ({ params}) => {

  const { id } = params as { id: string}

  return {
    props: {
      pokemon : await getPokemonInfo(id)
    }
  }
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export default PokemonPage