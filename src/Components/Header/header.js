import {React, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import {SafeAreaView} from 'react-native-safe-area-context';

export default function Header() {

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>News App</Text>
 
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'skyblue',
  },
  searchContainer: {
    position: 'absolute',
    top: 50,
    left: 10,
    right: 10,
    zIndex: 1,
    paddingHorizontal: 10, // Ensure Searchbar is above other content
  },
  searchBar: {
    borderRadius: 20,
  },
});
