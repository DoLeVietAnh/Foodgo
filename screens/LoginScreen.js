import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Notification from "./Notification.js"; // Import the Notification component

const commonStyles = StyleSheet.create({
  textInput: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    marginTop: 12,
    borderRadius: 5,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });

  const showNotification = (message, type) => {
    setNotification({ message, type });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(
        `http://172.17.152.117:8099/api/account/username/${username}`
      );

      if (!response.ok) {
        throw new Error("Username or Password is not correct");
      }

      const user = await response.json();

      if (user.password_hash === password) {
        if (user.status === "ACTIVE") {
          await AsyncStorage.setItem("isLoggedIn", "true");
          await AsyncStorage.setItem("username", username);
          navigation.replace("Tabs");
        } else {
          showNotification("Your account is not available.", "error");
        }
      } else {
        showNotification("Username or Password is not correct", "error");
      }
    } catch (error) {
      showNotification(error.message, "error");
    } finally {
      setUsername("");
      setPassword("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {notification.message ? (
        <Notification message={notification.message} type={notification.type} />
      ) : null}
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Login</Text>
      </View>
      <Text>Username</Text>
      <TextInput
        style={commonStyles.textInput}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />
      <Text>Password</Text>
      <TextInput
        style={commonStyles.textInput}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Text
          style={{ color: "orange" }}
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
        >
          Forgot Password?
        </Text>
      </View>
      <TouchableOpacity style={commonStyles.button} onPress={handleLogin}>
        <Text style={commonStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ fontWeight: "bold" }}>Or login with</Text>
      </View>
      <View style={styles.iconContainer}>
        <IconButton name="google" />
        <IconButton name="facebook" />
      </View>
      <View
        style={{
          justifyContent: "center",
          marginTop: 20,
          flexDirection: "row",
        }}
      >
        <Text>Not yet a member?</Text>
        <Text
          style={{ color: "orange", marginLeft: 10 }}
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          SignUp
        </Text>
      </View>
    </SafeAreaView>
  );
};

const IconButton = ({ name }) => {
  const iconMap = {
    google: "google",
    facebook: "facebook",
  };
  const colorMap = {
    google: "#DB4437",
    facebook: "#3b5998",
  };

  return (
    <TouchableOpacity
      style={[styles.iconButton, { backgroundColor: colorMap[name] }]}
    >
      <MaterialCommunityIcons name={iconMap[name]} size={24} color="white" />
      <Text style={styles.iconButtonText}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    padding: 16,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
    width: "45%",
  },
  iconButtonText: {
    color: "white",
    marginLeft: 8,
    fontWeight: "bold",
  },
});

export default LoginScreen;
