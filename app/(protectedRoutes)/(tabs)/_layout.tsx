import { Icon, useTheme } from "@rneui/themed";
import { Tabs, useFocusEffect, useRouter } from "expo-router";
import { Image } from "@rneui/themed";
import { TouchableOpacity } from "react-native";
import { useAuth } from "@/context/AuthContext";
import { Avatar } from "@rneui/base";
import { useCallback, useState } from "react";

const TabLayout = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [profileURL, setPhotoURL] = useState("");
  const { user } = useAuth();
  useFocusEffect(
    useCallback(() => {
      console.log("user", user.displayName);
      if (user.photoURL) {
        setPhotoURL(user.photoURL);
      }
    }, [])
  );
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => router.push({ pathname: "./saved" })}
            style={{ marginLeft: 20 }}
          >
            <Icon name="bookmark" type="fontisto" size={45} />
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <Image
            source={require("../../../assets/images/logo.png")}
            style={{ width: 100, height: 90 }}
            resizeMode="contain"
          />
        ),
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.grey3,
        headerStyle: {
          height: 120,
          borderWidth: 0,
          shadowOpacity: 0,
        },
        sceneStyle: {
          backgroundColor: theme.colors.background,
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() => router.push({ pathname: "/profile" })}
            style={{ marginRight: 10 }}
          >
            {profileURL ? (
              <Avatar source={{ uri: profileURL }} rounded size={45} />
            ) : (
              <Icon
                name="account-circle-outline"
                type="material-community"
                size={45}
                color="#000"
              />
            )}
          </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="train/index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="basketball"
              type="material-community"
              size={size}
              color={color}
            />
          ),
          title: "Train",
        }}
      />
      <Tabs.Screen
        name="numbers/index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="pin" size={size} color={color} />
          ),
          title: "Numbers",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
