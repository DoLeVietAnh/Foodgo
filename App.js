//TODO: ONLY SHOW THE BOTTOM TABS IN ONLY HOMESCREEN 
//! ĐANG ĐỂ PROFILE LÀ 1 SCREEN BURGER ĐỂ TEST
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import home_icon from "./assets/icons/icon-home.png";
import profile_icon from "./assets/icons/icon-profile.png";
import add_icon from "./assets/icons/icon-add-items.png";
import chatbot_icon from "./assets/icons/icon-chat.png";
import favourite_icon from "./assets/icons/icon-favourite.png";

// Screens
import HomeScreen from "./screens/HomeScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import AddItemsScreen from "./screens/AddItemsScreen.js";
import ChatbotScreen from "./screens/ChatbotScreen.js";
import FavouriteScreen from "./screens/FavouriteScreen.js";
import ChickenBurgerScreen from "./screens/BurgerScreens/ChickenBurger.js";
import VeggieBurgerScreen from "./screens/BurgerScreens/VeggieBurger.js";
import WendysBurgerScreen from "./screens/BurgerScreens/WendyBurger.js";
import FriedChickenBurgerScreen from "./screens/BurgerScreens/FriedChickenBurger.js";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const focusedColor = "#FFFFFF";
const defaultColor = "#B0B0B0";

// function HomeStack() {
//   return (
//     <Stack.Navigator screenOptions={
//       {headerShown: false}
//     }>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="ChickenBurger" component={ChickenBurgerScreen} />
//       <Stack.Screen name="VeggieBurger" component={VeggieBurgerScreen} />
//       <Stack.Screen name="WendysBurger" component={WendysBurgerScreen} />
//       <Stack.Screen name="FriedChickenBurger" component={FriedChickenBurgerScreen} />
//     </Stack.Navigator>
//   );
// }

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconPath;
          const iconColor = focused ? focusedColor : defaultColor;
          let iconHeight = 24;

          switch (route.name) {
            case "Home":
              iconPath = home_icon;
              break;
            case "Profile":
              iconPath = profile_icon;
              iconHeight = 35;
              break;
            case "AddItems":
              iconPath = add_icon;
              break;
            case "Chat":
              iconPath = chatbot_icon;
              break;
            case "Favorite":
              iconPath = favourite_icon;
              break;
          }

          return (
            <Image
              source={iconPath}
              style={{ width: 24, height: iconHeight, tintColor: iconColor }}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen options={{tabBarStyle: {display: "none"}}} name="Profile" component={ProfileScreen} />
      <Tab.Screen name="AddItems" component={WendysBurgerScreen} />
      <Tab.Screen options={{tabBarStyle: {display: "none"}}} name="Chat" component={ChatbotScreen} />
      <Tab.Screen name="Favorite" component={FavouriteScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    backgroundColor: "#EF2A39",
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
