import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";

//Components
import home_icon from "./assets/icon-home.png";
import profile_icon from "/assets/icon-profile.png";
import add_icon from "/assets/icon-add-items.png";
import chatbot_icon from "./assets/icon-chat.png";
import favourite_icon from "./assets/icon-favourite.png";

//Screens
import Home from "./screens/HomeScreeen.js";

const bottomTabs = createBottomTabNavigator();

function myTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconPath;
          let iconHeight = 24;
          let iconWidth = 24;

          switch (route.name) {
            case "Home":
              iconPath = focused ? require(home_icon) : require(home_icon);
              break;
            case "Profile":
              iconPath = focused
                ? require(profile_icon)
                : require(profile_icon);
              break;
            case "Add":
              iconPath = focused ? require(add_icon) : require(add_icon);
              break;
            case "Chat":
              iconPath = focused
                ? require(chatbot_icon)
                : require(chatbot_icon);
              break;
            case "Favorite":
              iconPath = focused
                ? require(favourite_icon)
                : require(favourite_icon);
              break;
          }

          return (
            <Image
              source={iconPath}
              style={{ width: iconWidth, height: iconHeight, tintColor: color }}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        headerShown: false,
      })}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Profile" component={Profile} />
      <Tabs.Screen name="Add" component={Settings} />
      <Tabs.Screen name="Chat" component={Settings} />
      <Tabs.Screen name="Favourite" component={Settings} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    paddingBottom: 10,
  },
});

export default function App() {
  return <NavigationContainer>{myTabs()}</NavigationContainer>;
}
