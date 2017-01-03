

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Relay from 'react-relay'


 class PokemonPage extends Component {
  render() {

    return (
      <View>
      <Text>  {this.props.pokemon.name} </Text>
      </View>
    );
  }
}

 export default Relay.createContainer(
  PokemonPage,
  {
    fragments: {
      pokemon: () => Relay.QL`
        fragment on Pokemon {
          id
          name
          url
        }
      `,
    },
  }
)
