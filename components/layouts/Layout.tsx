import React, { FC, FunctionComponent } from "react"
import Head from "next/head"
import { NavBar } from "../ui";

interface Props {
  title?: string,
  children?: React.ReactNode;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

// @ts-ignore
export const Layout: React.FunctionComponent<Props> = ({ title, children } ) => {

  let titulo = title || 'Pokemón App';
  return (
    <>
        <Head>
            <title> {titulo } </title>
            <meta name="author" content="Abner Martinez" />
            <meta name="description" content={`Información sobre el pokemón ${title}`} />
            <meta name="keywords" content="pokemon, pokedex, pokemon" />

            <meta property="og:title" content={`Información sobre ${title}`} />
            <meta property="og:description" content={`Esta es la página sobre ${title}`} />
            <meta property="og:image" content={`${origin}/_next/image?url=%2Fimg%2Fbanner.png&w=256&q=75`} />

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
