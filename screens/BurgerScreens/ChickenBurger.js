import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Import your icons
import Burger from "../../assets/images/BIG-chicken-burger.png";
import goBackIcon from "../../assets/icons/icon-arrowleft.png";
import searchIcon from "../../assets/icons/icon-magnifying-glass.png";
import StarRating from "../../assets/icons/icon-star-rating.png";

const WendyBurgerScreen = () => {
  const navigation = useNavigation();
  const [portion, setPortion] = useState(1); // Default portion value
  const basePrice = 6.24; // Base price for one portion

  // Handle navigation to CustomizeBurgerScreen
  const handleCustomize = () => {
    navigation.navigate("CustomizeBurgerScreen");
  };

  // Calculate total price
  const totalPrice = (basePrice * portion).toFixed(2);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={goBackIcon} style={styles.headerIcon} />
        </TouchableOpacity>
        <Image source={searchIcon} style={styles.headerIcon} />
      </View>
      <View style={styles.BannerImageContainer}>
        <Image source={Burger} style={styles.BannerImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.ItemName}>Hamburger Chicken Burger</Text>
        <View style={styles.ItemRating}>
          <Image source={StarRating} style={styles.StarIcon} />
          <Text>4.6 - 42 mins</Text>
        </View>
        <Text style={styles.ItemDescription}>
          Our chicken burger is a delicous and healthier alternative to
          traditional beef burgers, perfect for those looking for a lighter meal
          option. Try it today and experience the mouth-watering flavors of our
          Hamburger Chicken Burger.
        </Text>
      </View>
      <View style={styles.portionContainer}>
        <Text style={styles.portionLabel}>Portion</Text>
        <View style={styles.portionControl}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setPortion(portion > 1 ? portion - 1 : 1)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.portionValue}>{portion}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setPortion(portion + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>${totalPrice}</Text>
        </View>
        <TouchableOpacity style={styles.orderButton} onPress={handleCustomize}>
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
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  headerIcon: {
    width: 24,
    height: 24,
    tintColor: "#000",
  },
  BannerImageContainer: {
    height: 350,
    width: "95%",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  BannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  detailsContainer: {
    marginTop: 20,
  },
  ItemName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  ItemRating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  StarIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  ItemDescription: {
    fontSize: 16,
    color: "#6E6E6E",
    marginTop: 5,
  },
  portionContainer: {
    position: "absolute",
    right: 5,
    bottom: 100,
    padding: 10,
  },
  portionLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  portionControl: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  portionValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    left: 20,
    right: 20,
    bottom: 20,
  },
  priceContainer: {
    backgroundColor: "#EF2A39",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  priceText: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold",
  },
  orderButton: {
    backgroundColor: "#3C2F2F",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  orderButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WendyBurgerScreen;
