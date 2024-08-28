import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import Paymentsuccess from "../assets/images/PaymentSuccess.png";
import Paymentcheck from "../assets/images/Paymentcheck.png";

export default function SuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Image source={Paymentsuccess} style={styles.backgroundCircle} />
        <Image source={Paymentcheck} style={styles.foregroundCheck} />
        <Text style={styles.successText}>Success!</Text>
        <Text style={styles.message}>
          Your payment was successful. A receipt for this purchase has been sent
          to your email.
        </Text>
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.goBackText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 50,
  },
  messageBox: {
    width: 300,
    height: 350,
    padding: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    position: "relative",
  },
  backgroundCircle: {
    position: "absolute",
    marginTop: 20,
  },
  foregroundCheck: {
    top: 20,
  },
  successText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ff0000",
    marginBottom: 5,
    paddingTop: 50,
  },
  message: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 60,
    color: "#808080",
  },
  goBackButton: {
    backgroundColor: "#ff0000",
    padding: 13,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  goBackText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
