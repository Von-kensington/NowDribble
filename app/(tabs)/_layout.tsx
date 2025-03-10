import { Icon } from "@rneui/themed";
import { Tabs, useRouter } from "expo-router";
import { Image } from "@rneui/themed";
import { TouchableOpacity } from "react-native";

const TabLayout = () => {
  const router = useRouter();
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
            source={require("../../assets/images/logo.png")}
            style={{ width: 100, height: 90 }}
            resizeMode="contain"
          />
        ),
        headerStyle: {
          height: 120,
          borderWidth: 0,
          shadowOpacity: 0,
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() => router.push({ pathname: "./profile" })}
            style={{ marginRight: 10 }}
          >
            <Icon
              name="account-circle-outline"
              type="material-community"
              size={45}
              color="#000"
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="numbers/index"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="pin" size={24} color={color} />
          ),
          title: "Numbers",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
