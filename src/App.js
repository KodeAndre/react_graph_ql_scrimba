import React from "react"
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
// eslint-disable-next-line
import Style from "./style.css"
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory} from 'react-router-dom';

import PokemonsContainer from './containers/PokemonsContainer'

export default function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/'
  });

  return (
    <div>
      <Router>
        <ApolloProvider client={client}>
          <main>
            <Switch>
              <Route exact path="/">
                <PokemonsContainer />
              </Route>
            </Switch>
          </main>
        </ApolloProvider>
      </Router>
    </div>
  );
}


// https://graphql-pokemon2.vercel.app/