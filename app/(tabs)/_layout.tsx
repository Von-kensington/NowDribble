import { Icon } from "@rneui/themed";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="numbers/index"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="pin" size={24} color={color} />
          ),
          title: "Numbers",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
