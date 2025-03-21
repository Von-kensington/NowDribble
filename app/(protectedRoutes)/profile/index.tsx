import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Avatar,
  Text,
  Divider,
  Icon,
  makeStyles,
  useTheme,
} from "@rneui/themed";
import { useRouter } from "expo-router";
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
  },
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    paddingHorizontal: 50,
  },
  profileView: {
    margin: 20,
    alignItems: "center",
  },
}));
const uri = "https://i.pravatar.cc/300"; // replace this with your image url this is just a placeholder
const Profile = () => {
  const styles = useStyles();
  const router = useRouter();
  const { user } = useAuth();
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <TouchableOpacity
          onPress={() => router.push({ pathname: "/profile/edit" })}
        >
          <Icon name="edit" color={theme.colors.primary}></Icon>
        </TouchableOpacity>
        <Text h3 h3Style={{ fontWeight: "bold", color: theme.colors.black }}>
          Profile
        </Text>
        <TouchableOpacity
          onPress={() => router.push({ pathname: "/profile/settings" })}
        >
          <Icon name="settings" color={theme.colors.primary}></Icon>
        </TouchableOpacity>
      </View>
      <Divider />
      <View style={styles.profileView}>
        <Avatar rounded size={100} source={{ uri: uri }} />
        <Text style={{ margin: 20 }}>John doe</Text>
      </View>
    </View>
  );
};

export default Profile;
