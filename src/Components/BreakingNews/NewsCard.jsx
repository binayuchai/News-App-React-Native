import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View, Dimensions} from 'react-native';
import {Text, Card} from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;

export default function NewsCard({data}) {
  useEffect(() => {}, [data]);
  const limitedData = data.slice(0, 10);

  return (
    <View style={styles.container}>
      <FlatList
        data={limitedData}
        style={styles.flat}
        renderItem={({item, index}) => (
          <View style={styles.cardView}>
            <Card key={index}>
              <Card.Cover
                source={{uri: item.urlToImage}}
                style={styles.cover}
              />
              <Card.Content style={styles.content}>
                <Text variant="titleLarge" style={styles.text}>
                  {item.title}
                </Text>
              </Card.Content>
            </Card>
          </View>
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },

  cardView: {
    marginRight: 5,
  },
  cover: {
    height: 200,
    width: screenWidth - 10, // Adjust height as needed
  },
  content: {
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'start',
  },
  text: {
    color: 'grey',
    fontSize: 20,
    fontWeight: '900',
  },
});
