//import liraries
import Feed from '@/components/Feed';
import React from 'react';
import { View, StyleSheet } from 'react-native';

// create a component
const Home = () => {
  return (
    <View style={styles.container}>
      <Feed />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this Home available to the app
export default Home;
