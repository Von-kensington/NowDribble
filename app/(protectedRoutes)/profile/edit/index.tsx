import { auth, storage } from "@/firebaseConfig";
import { Avatar } from "@rneui/base";
import { Button, Input, makeStyles } from "@rneui/themed";
import { useRouter } from "expo-router";
import { updateProfile } from "firebase/auth";
import React, { Component, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useAuth } from "@/context/AuthContext";

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
  const [photoURL, setPhotoURL] = useState("");
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={async () => {
          try {
            const result = await DocumentPicker.getDocumentAsync({
              type: ["image/*"],
              copyToCacheDirectory: true,
            });
            if (result.canceled) return;

            const uri = result.assets[0].uri;
            const name = result.assets[0].name;

            // 2. Convert to Blob
            const response = await fetch(uri);
            const blob = await response.blob();

            // 3. Upload to Firebase Storage
            const storageRef = ref(
              storage,
              `profileImages/${user.uid}/${name}`
            );
            await uploadBytes(storageRef, blob);

            // 4. Get URL and save to Firestore
            const downloadURL = await getDownloadURL(storageRef);

            console.log("✅ Uploaded and saved photoURL!");
          } catch (error) {
            console.error("Error picking image: ", error);
          }
        }}
      >
        <Avatar rounded size={100} source={{ uri: photoURL ? photoURL : "" }} />
      </TouchableOpacity>
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
          if (auth.currentUser !== null) {
            updateProfile(auth.currentUser, {
              displayName: username,
            }).then(() => router.replace("/profile"));
          }
        }}
      />
    </View>
  );
};

export default ProfileEdit;
