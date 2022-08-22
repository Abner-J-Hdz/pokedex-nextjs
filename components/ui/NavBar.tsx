import { useTheme, Spacer, Text, Link } from "@nextui-org/react"
import Image from "next/image";
import NextLink from "next/link"

export const NavBar = () => {

    const { theme } = useTheme();

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'start',
        padding: '0x 20px',
        paddingRight: '20px',
        backgroundColor: theme?.colors.gray50.value
    }}>
      <NextLink href="/" passHref>
        <Link href="" css={{ alignItems:'center' }}>
          <Image 
              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
              alt="Icono de la app"
              width={70}
              height={70}
          />
          <Text color="white" h2 >P</Text>
          <Text color="white" h3 >okémon</Text>
        </Link>
      </NextLink>
        <Spacer css={{ flex:1 }} />
      <NextLink href="/favorito" passHref>
        <Link>
          <Text>Favorito</Text>
        </Link>
      </NextLink>
    </div>
  )
}
