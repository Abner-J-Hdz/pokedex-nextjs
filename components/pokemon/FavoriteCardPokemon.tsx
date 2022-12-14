import { FC } from "react"
import { Card, Grid } from "@nextui-org/react"
import { useRouter } from "next/router"

interface Props{
    pokemonId: number
  }

const FavoriteCardPokemon : FC<Props> =  ({ pokemonId }) => {

    const router = useRouter();

    const onFavoriteClicked = () => {
      router.push(`/pokemon/${pokemonId}`)
    }
  
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} >
        <Card isHoverable isPressable onClick={onFavoriteClicked} css={{ padding: 10}}>
            <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`} 
            width={'100%'}
            height={150}
            />
        </Card>
    </Grid>
  )
}

export default FavoriteCardPokemon