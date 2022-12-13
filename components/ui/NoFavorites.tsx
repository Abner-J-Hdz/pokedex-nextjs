import { Container, Image, Text } from "@nextui-org/react";

const NoFavorites = () => {
  return (
    <Container 
    css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100)',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
    }}
  >
    <Text h1>No hay favoritos</Text>
    <Image
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      width={250}
      height={250}
    />
  </Container>
  )
}

export default NoFavorites