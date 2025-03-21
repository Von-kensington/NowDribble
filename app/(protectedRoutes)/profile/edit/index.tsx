import { auth } from "@/firebaseConfig";
import { Avatar } from "@rneui/base";
import { Button, Input, makeStyles } from "@rneui/themed";
import { useRouter } from "expo-router";
import { updateProfile } from "firebase/auth";
import React, { Component, useState } from "react";
import { View, Text } from "react-native";

const useStyles = makeStyles((theme) => ({
  profileAvatar: {},
  textInput: {},
  saveButton: { width: "100%", borderRadius: 10 },
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
}));

const ProfileEdit = () => {
  const styles = useStyles();
  const [username, setUsername] = useState("");
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size={100}
        source={{ uri: "https://i.pravatar.cc/300" }}
      />
      <Input
        placeholder="Display name"
        style={styles.profileAvatar}
        onChangeText={setUsername}
      />
      <Button
        title="Save Changes"
        containerStyle={styles.saveButton}
        buttonStyle={{ padding: 15 }}
        onPress={() => {
          updateProfile(auth.currentUser, {
            displayName: username,
          }).then(() => router.replace("/profile"));
        }}
      />
    </View>
  );
};

//make this component available to the app
export default ProfileEdit;
