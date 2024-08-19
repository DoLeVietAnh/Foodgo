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
import Burger from "../../assets/images/BIG-wendys-burger.png";
import goBackIcon from "../../assets/icons/icon-arrowleft.png";
import searchIcon from "../../assets/icons/icon-magnifying-glass.png";
import StarRating from "../../assets/icons/icon-star-rating.png";

const WendyBurgerScreen = () => {
  const navigation = useNavigation();
  const [portion, setPortion] = useState(1); // Default portion value

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
        <Text style={styles.ItemName}>Chessburger Wendy's Burger</Text>
        <View style={styles.ItemRating}>
          <Image source={StarRating} style={styles.StarIcon} />
          <Text>4.9 - 26 mins</Text>
        </View>
        <Text style={styles.ItemDescription}>
          The Cheeseburger Wendy's Burger is a classic fast food burger that
          packs a punch of flavor in every bite. Made with a juicy beef patty
          cooked to perfection, it's topped with melted American cheese, crispy
          lettuce, ripe tomato, and crunchy pickles.
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
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>ORDER NOW</Text>
      </TouchableOpacity>
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
    width: "100%",
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
    right: 20,
    bottom: 12,
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
  orderButton: {
    position: "absolute",
    left: 20,
    bottom: 20,
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
