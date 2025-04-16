import React from 'react';
import {Text} from 'react-native-paper';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import NewsCard from './NewsCard';
import {useNavigation} from '@react-navigation/native';
export default function BreakingNews({data}) {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.breakingNews}>
          <Text style={styles.text}>BreakingNews</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('detailView', {data})}>
            <Text style={styles.textView}>view all</Text>
          </TouchableOpacity>
        </View>
        <NewsCard data={data} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  breakingNews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  textView: {
    fontSize: 16,
    color: 'grey',
  },
});
