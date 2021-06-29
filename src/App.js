import React from "react"
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
// eslint-disable-next-line
import Style from "./style.css"

import PokemonsContainer from './containers/PokemonsContainer'

export default function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/'
  });

  return (
    <div>
      <ApolloProvider client={client}>
        <main>
          <PokemonsContainer />
        </main>
      </ApolloProvider>
    </div>
  );
}


// https://graphql-pokemon2.vercel.app/