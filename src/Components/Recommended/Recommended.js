import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import CardNews from './CardNews';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Recommended({data}) {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Recommended</Text>
        <CardNews data={data} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});
