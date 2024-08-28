import React, { useEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import your icons
import home_icon from "./assets/icons/icon-home.png";
import profile_icon from "./assets/icons/icon-profile.png";
import add_icon from "./assets/icons/icon-add-items.png";
import chatbot_icon from "./assets/icons/icon-chat.png";
import favourite_icon from "./assets/icons/icon-favourite.png";

// Import screens
import SignUpScreen from "./screens/SignUpScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import IntroScreen from "./screens/IntroScreen";
import ProfileScreen from "./screens/ProfileScreen2.js";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen.js";
import ChatbotScreen from "./screens/ChatbotScreen.js";
import WendysBurgerScreen from "./screens/BurgerScreens/WendyBurger.js";
import ChickenBurgerScreen from "./screens/BurgerScreens/ChickenBurger.js";
import VeggieBurgerScreen from "./screens/BurgerScreens/VeggieBurger.js";
import FriedChickenBurgerScreen from "./screens/BurgerScreens/FriedChickenBurger.js";
import CustomizeBurgerScreen from "./screens/CustomizeBurger.js";
import PaymentScreen from "./screens/PaymentScreen.js";
import SuccessScreen from "./screens/SuccessScreen.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const focusedColor = "#FFFFFF";
const defaultColor = "#B0B0B0";

// Bottom Tabs
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
        tabBarStyle:
          route.name === "Home" ? styles.tabBar : { display: "none" },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Chat" component={ChatbotScreen} />
    </Tab.Navigator>
  );
}

// Main App Component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loginStatus = await AsyncStorage.getItem("isLoggedIn");
        setIsLoggedIn(loginStatus === "true");
      } catch (error) {
        console.error("Failed to check login status:", error);
      }
    };
    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) {
    return null; // or a loading screen if needed
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "Tabs" : "IntroScreen"}>
        <Stack.Screen
          name="IntroScreen"
          component={IntroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatbotScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WendysBurgerScreen"
          component={WendysBurgerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChickenBurgerScreen"
          component={ChickenBurgerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VeggieBurgerScreen"
          component={VeggieBurgerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FriedChickenBurgerScreen"
          component={FriedChickenBurgerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CustomizeBurgerScreen"
          component={CustomizeBurgerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    backgroundColor: "#EF2A39",
  },
});

export default App;
