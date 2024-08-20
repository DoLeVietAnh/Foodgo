import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons"; // For icons
const { width, height } = Dimensions.get("window"); // Get screen dimensions

import profilePic from "../assets/images/profile-pic.png";

const ProfileScreen = ({ navigation }) => {
  const [isEditable, setIsEditable] = useState(false); // State to control edit mode

  const toggleEditMode = () => {
    setIsEditable(!isEditable); // Toggle edit mode
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconButtonLeft}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Image source={profilePic} style={styles.profileImage} />
        <TouchableOpacity style={styles.iconButtonRight}>
          <Ionicons name="settings" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Form Fields */}
      <View style={styles.formContainer}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={[styles.input, !isEditable && styles.disabledInput]}
            value="Sophia Patel"
            editable={isEditable} // Control editability
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, !isEditable && styles.disabledInput]}
            value="sophiapatel@gmail.com"
            keyboardType="email-address"
            editable={isEditable} // Control editability
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Delivery address</Text>
          <TextInput
            style={[styles.input, !isEditable && styles.disabledInput]}
            value="123 Main St Apartment 4A, New York, NY"
            editable={isEditable} // Control editability
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>
            Password
            <MaterialIcons
              name="lock"
              size={14}
              color="#666"
              style={styles.lockIcon}
            />
          </Text>
          <TextInput
            style={[styles.input, !isEditable && styles.disabledInput]}
            value="********"
            secureTextEntry={true}
            editable={isEditable} // Control editability
          />
        </View>
        <View style={styles.buttonRow}>
          {/* Buttons */}
          <TouchableOpacity style={styles.editButton} onPress={toggleEditMode}>
            <Text style={styles.editButtonText}>
              {isEditable ? "Save Changes" : "Edit Profile"}
            </Text>
            <Ionicons
              name={isEditable ? "checkmark" : "create-outline"}
              size={20}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.logoutButtonText}>Log out</Text>
            <Ionicons name="log-out-outline" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#FF3B30",
    paddingVertical: height * 0.03,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  profileImage: {
    width: width * 0.3, // Adjusting to 30% of the screen width
    height: width * 0.35, // Keeping it square
    borderRadius: 20, // Half of the width to make it circular
    //marginBottom: height * 0.02,
    borderWidth: 3,
    borderColor: "white",
  },
  iconButtonLeft: {
    position: "absolute",
    top: height * 0.03,
    left: 10,
  },
  iconButtonRight: {
    position: "absolute",
    top: height * 0.03,
    right: 20,
  },
  formContainer: {
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.02,
    borderTopLeftRadius: 50,
  },
  formGroup: {
    marginBottom: height * 0.02,
  },
  label: {
    fontSize: width * 0.04,
    color: "#666",
    marginBottom: height * 0.005,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: width * 0.045,
    color: "#333",
    backgroundColor: "#fff",
  },
  disabledInput: {
    backgroundColor: "#f0f0f0",
    color: "#999",
  },
  lockIcon: {
    marginLeft: 5,
  },
  buttonRow: {
    flexDirection: "row", // Align children in a row
    justifyContent: "space-between", // Space between the buttons
    paddingTop: 130,
  },
  editButton: {
    backgroundColor: "black",
    padding: height * 0.02,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: height * 0.01,
    width: "50%",
    flexDirection: "row",
    height: 60,
    marginHorizontal: 10,
    marginLeft: 0,
  },
  editButtonText: {
    color: "white",
    alignItems: "center",
    marginLeft: 10,
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: "white",
    padding: height * 0.02,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: height * 0.03,
    width: "50%",
    flexDirection: "row",
    height: 60,
    borderBottomColor: "red",
    borderColor: "red",
  },
  logoutButtonText: {
    color: "red",
    fontSize: 18,
    borderColor: "red",
    marginLeft: 25,
  },
  optionButtonText: {
    fontSize: width * 0.045,
    color: "#333",
  },
});

export default ProfileScreen;
