import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

// Example assets (replace with actual paths)
import goBackIcon from "../assets/icons/icon-arrowleft.png";
import searchIcon from "../assets/icons/icon-magnifying-glass.png";
import burgerImage from "../assets/images/CustomizeBurger.png";
import tomatoIcon from "../assets/images/tomato.png";
import onionIcon from "../assets/images/onions.png";
import picklesIcon from "../assets/images/pickles.png";
import baconIcon from "../assets/images/bacons.png";
import friesIcon from "../assets/images/fries.png";
import chesseIcon from "../assets/images/chesse.png";
import mushroomIcon from "../assets/images/mushroom.png";
import avocadoIcon from "../assets/images/avocado.png";
import coleslawIcon from "../assets/images/coleslaw.png";
import saladIcon from "../assets/images/lectuce.png";
import onionRingsIcon from "../assets/images/onionrings.png";
import mozzerellaIcon from "../assets/images/mozzerella.png";
import { useNavigation } from "@react-navigation/native";

const toppings = [
  { id: 1, image: tomatoIcon },
  { id: 2, image: onionIcon },
  { id: 3, image: picklesIcon },
  { id: 4, image: baconIcon },
  { id: 5, image: chesseIcon },
  { id: 6, image: mushroomIcon },
  { id: 7, image: avocadoIcon },
];

const sideOptions = [
  { id: 1, image: friesIcon },
  { id: 2, image: coleslawIcon },
  { id: 3, image: saladIcon },
  { id: 4, image: onionRingsIcon },
  { id: 5, image: mozzerellaIcon },
];

const CustomizeBurgerScreen = () => {
  const navigation = useNavigation();
  const [portion, setPortion] = useState(2);
  const price = 16.49;

  const goToPayment = () => {
    navigation.navigate("PaymentScreen");
  };

  const incrementPortion = () => setPortion(portion + 1);
  const decrementPortion = () => setPortion(portion > 1 ? portion - 1 : 1);

  const renderOption = ({ item }) => (
    <TouchableOpacity style={styles.optionCard}>
      <Image source={item.image} style={styles.optionImage} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={goBackIcon} style={styles.headerIcon} />
        </TouchableOpacity>
        <Image source={searchIcon} style={styles.headerIcon} />
      </View>
      <View style={styles.headerContainer}>
        {/* Left side: Burger Image */}
        <Image source={burgerImage} style={styles.burgerImage} />

        {/* Right side: Text and Portion Selector */}
        <View style={styles.headerRight}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Customize Options</Text>
            <Text style={styles.subtitle}>
              Customize your burger to Your Tastes. Ultimate Experience
            </Text>
          </View>

          <View style={styles.portionSelector}>
            <Text style={styles.portionLabel}>Portion</Text>
            <View style={styles.portionControls}>
              <TouchableOpacity
                style={styles.button}
                onPress={decrementPortion}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.portionText}>{portion}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={incrementPortion}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Toppings */}
      <Text style={styles.sectionTitle}>Toppings</Text>
      <FlatList
        data={toppings}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOption}
        style={styles.optionsList}
      />

      {/* Side Options */}
      <Text style={styles.sectionTitle}>Side options</Text>
      <FlatList
        data={sideOptions}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOption}
        style={styles.optionsList}
      />

      {/* Total and Order Now Button */}
      <View style={styles.footer}>
        <View style={styles.TotalContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalPrice}>
            <Text style={styles.currencySymbol}>$</Text>
            <Text style={styles.price}>{price.toFixed(2)}</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.orderButton} onPress={goToPayment}>
          <Text style={styles.orderButtonText}>ORDER NOW</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  headerIcon: {
    width: 24,
    height: 24,
    tintColor: "#000",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingTop: 20,
    marginVertical: 20,
  },
  burgerImage: {
    width: "50%",
    height: 250,
    resizeMode: "contain",
  },
  headerRight: {
    flex: 1,
    marginLeft: 10,
  },
  textContainer: {
    alignItems: "flex-start",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#7D7D7D",
  },
  portionSelector: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
  portionLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  portionControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#EF2A39",
    borderRadius: 10,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  portionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  optionsList: {
    marginBottom: 20,
  },
  optionCard: {
    width: 80, // Fixed width
    height: 90, // Fixed height
    alignItems: "center",
    marginRight: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    justifyContent: "center", // Center the content vertically
  },
  optionImage: {
    width: 60, // Adjust width as needed
    height: 60, // Adjust height as needed
    alignSelf: "center", // Center horizontally
  },
  optionText: {
    fontSize: 14,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",
    paddingBottom: 20,
  },
  TotalContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: "bold",
  },
  currencySymbol: {
    color: "#EF2A39", // Red color for the "$" symbol
    fontSize: 18,
  },
  price: {
    color: "#000000", // Black color for the price
    fontSize: 24,
  },
  orderButton: {
    backgroundColor: "#EF2A39",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  orderButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CustomizeBurgerScreen;
