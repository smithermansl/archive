/**
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const dimensions = Dimensions.get('window');
const height = (dimensions.width * 3/4);
const width = dimensions.width;


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <ScrollView style={styles.content}>
          <Text style={styles.welcome}>Nope</Text>
          <Image source={require('../images/chicken.jpg')} style={styles.image} />
        </ScrollView>

        <View style={styles.navbar}>
          <Text>Nav!!!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#e0568f',
  },
  image: {
    width,
    height
  },
  header: {
    height: 70,
    padding: 10,
    backgroundColor: '#E0E7E9',
    width: Dimensions.get('window').width,
  },
  navbar: {
    height: 50,
    padding: 10,
    width: Dimensions.get('window').width,
    backgroundColor: '#E0E7E9',
    alignSelf: 'flex-end'
  }
});
