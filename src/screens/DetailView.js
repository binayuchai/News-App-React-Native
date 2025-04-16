import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, Dimensions} from 'react-native';
import {Text, Card, useTheme} from 'react-native-paper';

export default function DetailView() {
  const {colors} = useTheme();
  const route = useRoute();
  const {data} = route.params; //Retrieve data from route parameter

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.url}
        renderItem={({item, index}) => (
          <Card style={styles.card} key={index}>
            <View style={styles.cardRow}>
              {item.urlToImage ? (
                <Card.Cover
                  source={{uri: item.urlToImage}}
                  style={styles.cardImage}
                />
              ) : (
                <Card.Cover
                  source={{uri: 'https://via.placeholder.com/100'}}
                  style={styles.cardImage}
                />
              )}
              <View style={styles.contentColumn}>
                <Card.Title title={item.title} />
                <Card.Content>
                  <Text numberOfLines={2} variant="bodyMedium">
                    {item.description}
                  </Text>
                </Card.Content>
              </View>
            </View>
          </Card>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  card: {
    elevation: 0,
    backgroundColor: 'transparent',
    shadowColor: 'rgba(0,0,0,.0)',
  },
  cardRow: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  contentColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  cardImage: {
    width: 100,
    height: 90,
  },
});
