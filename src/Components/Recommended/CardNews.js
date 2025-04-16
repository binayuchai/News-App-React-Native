import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Text, Card} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function CardNews({data}) {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
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
