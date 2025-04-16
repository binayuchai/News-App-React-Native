import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, View} from 'react-native';
import {Searchbar, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Discover() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Discover</Text>
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>
     
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    paddingVertical: 10,
    color: 'skyblue',
    fontWeight: '900',
  },
  searchContainer: {
    padding: 10,
  },
  searchBar: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
  },

});
