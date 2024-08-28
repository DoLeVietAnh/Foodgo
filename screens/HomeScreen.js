import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

// Assets
import ProfilePicture from "../assets/images/profile-picture.png";
import searchIcon from "../assets/icons/icon-search.png";
import searchSettingsIcon from "../assets/icons/icon-search-settings.png";
import starRating from "../assets/icons/icon-star-rating.png";
import heart from "../assets/icons/icon-heart.png";
import wendysBurger from "../assets/images/wendys-burger.png";
import veggieBurger from "../assets/images/veggie-burger.png";
import chickenBurger from "../assets/images/chicken-burger.png";
import friedChickenBurger from "../assets/images/fried-chicken-burger.png";

// Screens
import ChickenBurgerScreen from "./BurgerScreens/ChickenBurger.js";
import VeggieBurgerScreen from "./BurgerScreens/VeggieBurger.js";
import WendysBurgerScreen from "./BurgerScreens/WendyBurger.js";
import FriedChickenBurgerScreen from "./BurgerScreens/FriedChickenBurger.js";

// Menu items
const menuItems = [
  { id: 1, text: "All" },
  { id: 2, text: "Combos" },
  { id: 3, text: "Sliders" },
  { id: 4, text: "Classics" },
  { id: 5, text: "Sides" },
  { id: 6, text: "Desserts" },
  { id: 7, text: "Drinks" },
];

// Clickable items
const clickableItems = [
  {
    id: 1,
    image: wendysBurger,
    title: "Chesseburger",
    subtitle: "Wendy's Burger",
    rating: "4.9",
    goToPath: { name: "WendysBurgerScreen" },
  },
  {
    id: 2,
    image: veggieBurger,
    title: "Hamburger",
    subtitle: "Veggie Burger",
    rating: "4.8",
    goToPath: { name: "VeggieBurgerScreen" },
  },
  {
    id: 3,
    image: chickenBurger,
    title: "Hamburger",
    subtitle: "Chicken Burger",
    rating: "4.6",
    goToPath: { name: "ChickenBurgerScreen" },
  },
  {
    id: 4,
    image: friedChickenBurger,
    title: "Hamburger",
    subtitle: "Fried Chicken Burger",
    rating: "4.5",
    goToPath: { name: "FriedChickenBurgerScreen" },
  },
];

const App = () => {
  const navigation = useNavigation();

  const numColumns = 2;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle1}>Foodgo</Text>
          <Text style={styles.bannerTitle2}>Order your favourite food</Text>
        </View>
        <View style={styles.profileImageContainer}>
          <Image style={styles.profileImage} source={ProfilePicture} />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Image source={searchIcon} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#000000"
        />
        <View style={styles.searchSettingsContainer}>
          <TouchableOpacity style={styles.searchSettings}>
            <Image
              source={searchSettingsIcon}
              style={styles.searchSettingsIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu Items Slider */}
      <View>
        <FlatList
          data={menuItems}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.menuItemsContainer}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.menuItem}>
              <Text style={styles.menuItemText}>{item.text}</Text>
            </View>
          )}
        />
      </View>

      {/* Clickable Items in a 2x2 Grid */}
      <FlatList
        data={clickableItems}
        key={numColumns.toString()} // This key will force the FlatList to re-render when numColumns changes
        numColumns={numColumns}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.clickableItemsContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.clickableItem}
            onPress={() => navigation.navigate(item.goToPath.name)}
          >
            <Image
              source={item.image}
              style={[
                styles.clickableItemImage,
                item.id == 4 && { height: 100, width: "110%" },
                item.id == 3 && { height: 100, width: "100%" },
              ]}
            />
            <View style={styles.clickableItemTextContainer}>
              <Text style={styles.clickableItemTitle}>{item.title}</Text>
              <Text style={styles.clickableItemSubtitle}>{item.subtitle}</Text>
            </View>
            <View style={styles.clickableItemFooter}>
              <Image source={starRating} style={styles.footerIcon} />
              <Text style={styles.footerText}>{item.rating}</Text>
              <Text style={styles.clickableItemDescription}>
                {item.description}
              </Text>
              <Image source={heart} style={styles.footerIcon} />
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  banner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bannerContent: {},
  bannerTitle1: {
    fontSize: 42,
    fontWeight: "bold",
  },
  bannerTitle2: {
    fontSize: 18,
  },
  profileImageContainer: {
    marginLeft: 20,
    marginTop: 20,
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  searchContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    height: 50,
    width: "100%",
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "#B0B0B0",
    marginLeft: 10,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
  },
  searchSettingsContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginLeft: 100,
  },
  searchSettings: {
    backgroundColor: "#EF2A39",
    padding: 10,
    borderRadius: 10,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  searchSettingsIcon: {
    width: 24,
    height: 24,
    tintColor: "#FFFFFF",
  },
  menuItemsContainer: {
    marginTop: 20,
  },
  menuItem: {
    padding: 10,
    backgroundColor: "#F3F4F6",
    borderRadius: 15,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  menuItemText: {
    fontSize: 16,
    color: "#000000",
  },
  clickableItemsContainer: {
    marginTop: 20,
  },
  clickableItem: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  clickableItemImage: {
    width: "90%",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  clickableItemTextContainer: {
    marginBottom: 10,
  },
  clickableItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  clickableItemSubtitle: {
    fontSize: 13,
    color: "#7D7D7D",
  },
  clickableItemFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerIcon: {
    width: 20,
    height: 20,
  },
  footerText: {
    fontSize: 14,
    color: "#000000",
    marginLeft: 3,
  },
  clickableItemDescription: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 14,
    color: "#000000",
  },
});

export default App;
