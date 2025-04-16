import React, {useEffect, useState} from 'react';
import {Text, Button, ActivityIndicator} from 'react-native-paper';
import Header from '../Components/Header/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';
import BreakingNews from '../Components/BreakingNews/BreakingNews';
import Recommended from '../Components/Recommended/Recommended';
import axios from 'axios';

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/everything?q=apple&from=2024-06-30&to=2024-06-30&sortBy=popularity&pageSize=20&apiKey=',
      );
      setData(response.data.articles);
      setisLoading(false);
    } catch (error) {
      console.log('Error fetching data: ', error);
      setisLoading(false);
    }
  };

  return (
    <SafeAreaView>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="skyblue" />
          <Text>Loading...</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Header data={data} />
          <BreakingNews data={data} />
          <Recommended data={data} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  loadingContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
