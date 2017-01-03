/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  Text,
  View,

} from 'react-native';
import Relay from 'react-relay';
import PokemonPage from './PokemonPage';

 class Poks extends Component {
  render () {

    return (
      <View>
        {this.props.viewer.allPokemons.edges.map((edge) => edge.node).map((pokemon) =>
          <PokemonPage key={pokemon.id} pokemon={pokemon} />
        )
        }
      </View>
    )
  }
}


export default  Relay.createContainer(
  Poks,
  {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          allPokemons (first: 100000) {
            edges {
              node {
                ${PokemonPage.getFragment('pokemon')}
                id
              }
            }
          }
          id
        }
      `,
    },
  },
)
