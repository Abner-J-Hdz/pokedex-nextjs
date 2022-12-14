import { Layout } from "../../components/layouts"
import NoFavorites from "../../components/ui/NoFavorites"
import {useState, useEffect} from 'react';
import { localFavorites } from "../../utils";
import FavoritesPokemons from "../../components/pokemon/FavoritesPokemons";

const Favorito = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])
  
  return (
    <Layout title="Pokémon - Favoritos">
        {
          favoritePokemons.length === 0 
          ? 
          (<NoFavorites />)
          : 
          ( 
            <FavoritesPokemons pokemons={favoritePokemons} />
          )
        }
    </Layout>
  )
}

export default Favorito