import React, { FC, FunctionComponent } from "react"
import Head from "next/head"
import { NavBar } from "../ui";

interface Props {
  title?: string,
  children?: React.ReactNode;
}


// @ts-ignore
export const Layout: React.FunctionComponent<Props> = ({ title, children } ) => {

  let titulo = title || 'Pokemón App';
  return (
    <>
        <Head>
            <title> {titulo } </title>
            <meta name="author" content="Abner Martinez" />
            <meta name="description" content="Información sobre el pokemón XXXXXX" />
            <meta name="keywords" content="pokemon, pokedex, pokemon" />
        </Head>
        <NavBar/>
        <main style={{
          padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
