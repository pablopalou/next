import { Children, FC } from "react"
import Head from "next/head"
import { Navbar } from "../ui"

interface Props {
    children: React.ReactNode,
    title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head> 
                <title> { title || 'PokemonApp'} </title>
                <meta name="author" content="Pablo Palou"/>
                <meta name="description" content={`Informacion sobre el pokemon ${title}`}/>
                <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
            </Head>

            <Navbar/>

            <main style={{
                padding: '0px 20px',
            }}>
                { children }
            </main>

        </>
    )
}
