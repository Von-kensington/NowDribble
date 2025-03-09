//import liraries
import { Card } from '@rneui/themed';
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
const captions: string[] = [
  "Focus on a firm dribble on the outside of each foot.",
  "Keep your hand on top of the ball to make your dribble strong and quick. Don't go past your center of mass.",
  "Focus on making your dribble quick and slightly rocking your body towards the direction of the ball, right to left.",
  "Same as 3, focus on making your dribble quick and slightly rocking your body towards the direction of the ball, right to left (body wrap).",
  "To speed up ball control, focus on crossing the ball quickly and snappily between the center of your wide base without your arms too far outside your waist."
];
// create a component
const Numbers = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={captions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TouchableOpacity onPress={() => alert(item)}><Card><Text>{item}</Text></Card></TouchableOpacity>}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Numbers;
