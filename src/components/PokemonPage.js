

import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Relay from 'react-relay'

class PokemonPage extends Component {
  render() {
      let URL = this.props.pokemon.url;
    return (
      <View  >
        <Image
           style={{width: 50, height: 50}}
           source={{uri: this.props.pokemon.url}}
         />
        <View>
          <Text>
          {this.props.pokemon.name}</Text>
        </View>
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
