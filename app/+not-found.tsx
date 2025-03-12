import { Avatar, Button, Text, Input, makeStyles, Switch } from "@rneui/themed";
import { Link, useNavigation } from "expo-router";
import React, { Component, useEffect, useState } from "react";
import { View } from "react-native";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: theme.colors.primary,
    textDecorationLine: "underline",
    margin: 10,
  },
}));

const NotFoundScreen = () => {
  const styles = useStyles();
  const [useDark, setUseDark] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  });
  return (
    <View style={styles.container}>
      <Text h2>Coming soon...</Text>
      <Link href="/" style={styles.link}>
        Go Home
      </Link>
    </View>
  );
};

//make this component available to the app
export default NotFoundScreen;
