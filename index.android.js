/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Relay, {
  DefaultNetworkLayer,
  RootContainer,
} from 'react-relay';
import AppRoute from './src/Routes/AppRoute';
import Poks from './src/components/Poks';

Relay.injectNetworkLayer(
  new DefaultNetworkLayer('https://api.graph.cool/relay/v1/cix8wu5sw1y820111s3kjht3t')
);

export default class TestThree extends Component {
  render(): void {
    return (
      <View style={styles.container}>
        <RootContainer
          Component={Poks}
          route={new AppRoute()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestThree', () => TestThree);
