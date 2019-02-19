import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const TabNav = () => {
  return (
    <View style={styles.container} >
      <View style={styles.navbar}>
        <Text>Nav!!!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  ,
  icon: {
    width: 50,
    height: 50
  }
})

export default TabNav;
