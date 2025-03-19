import { useAuth } from "@/context/AuthContext";
import { Avatar } from "@rneui/base";
import { Button, Input, makeStyles, Switch } from "@rneui/themed";
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

const ProfileSettings = () => {
  const styles = useStyles();
  const [useDark, setUseDark] = useState(false);
  const { logout } = useAuth() || {};
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          margin: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Dark Mode</Text>
        <Switch value={useDark} onValueChange={setUseDark} />
      </View>
      <Button
        title="Sign Out"
        containerStyle={styles.saveButton}
        buttonStyle={{ padding: 15 }}
        onPress={() => {
          if (logout) logout();
        }}
      />
    </View>
  );
};

//make this component available to the app
export default ProfileSettings;
