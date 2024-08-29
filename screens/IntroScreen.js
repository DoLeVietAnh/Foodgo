import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";

const IntroScreen = () => {
  const navigation = useNavigation();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
      });
      console.log("Font loaded successfully");
      setFontsLoaded(true);
    } catch (error) {
      console.error("Error loading font", error);
    }
  };

  useEffect(() => {
    loadFonts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login"); // Navigate to the Tabs screen after 1.5 seconds
    }, 1500);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigation]);

  if (!fontsLoaded) {
    return null; // Render nothing or a loading component until the fonts are loaded
  }

  return (
    <LinearGradient
      colors={["#FF939B", "#EF2A39"]}
      start={{ x: 0.66, y: 0 }}
      end={{ x: 0.65, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.innerContainer}>
        <Image
          source={require("../assets/images/Foodgo.png")}
          style={{ marginTop: 250, width: 200, height: 70 }}
        />
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/BurgerImage1.png")}
            style={styles.image1}
          />
          <Image
            source={require("../assets/images/BurgerImage2.png")}
            style={styles.image2}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Lobster-Regular", // Ensure this matches the loaded font name
    marginBottom: 20,
    marginTop: 250,
  },
  imageContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "flex-end", // Align items at the bottom
  },
  image1: {
    width: 190, // Adjust the size as needed
    height: 230, // Adjust the size as needed
  },
  image2: {
    width: 190, // Adjust the size as needed
    height: 190, // Adjust the size as needed
    marginLeft: -40, // Adjust spacing between images as needed
    bottom: 0, // Align image2 to the bottom
  },
});

export default IntroScreen;
