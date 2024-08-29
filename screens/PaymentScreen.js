import React, { useState } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

import Mastercard from "../assets/images/MasterCard.png";
import Visacard from "../assets/images/VisaCard.png";
import Linebreak from "../assets/images/LineBreak.png";
import Check from "../assets/images/check.png";

export default function PaymentScreen() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [transactionDetails, setTransactionDetails] = useState(null);

  const handlePress = async (button) => {
    setSelectedButton(button);

    try {
      const response = await axios.get(
        "https://my.sepay.vn/userapi/transactions/list",
        {
          headers: {
            Authorization: `Bearer YFA6QBSYDOPC8IMBHNYIVWMPTBDGEGPWCKPHRVCVO3XD4QQWTT2ZYQUITSHU0N92`,
          },
        }
      );

      if (response.status === 200) {
        setTransactionDetails(response.data);
        alert("Transaction details fetched successfully!");
      } else {
        alert(
          `Failed to fetch transaction details. Status code: ${response.status}`
        );
      }
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.status} - ${error.response.data}`);
      } else if (error.request) {
        alert(
          "No response received from the server. Please check your network."
        );
      } else {
        alert(`Error: ${error.message}`);
      }
      console.error("Error fetching transaction details:", error);
    }
  };

  const handleClose = () => {
    setTransactionDetails(null);
    setSelectedButton(null);
  };

  const navigation = useNavigation();

  const goToSuccess = () => {
    navigation.navigate("SuccessScreen");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconButtonLeft}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.Orderheader}>Order summary</Text>

      <View style={styles.OrderRow}>
        <Text style={styles.Ordertext}>Order</Text>
        <Text style={styles.Orderprice}>$16.48</Text>
      </View>
      <View style={styles.TaxesRow}>
        <Text style={styles.Taxestext}>Taxes</Text>
        <Text style={styles.Taxesprice}>$0.3</Text>
      </View>
      <View style={styles.DeliveryRow}>
        <Text style={styles.Delitext}>Delivery fees</Text>
        <Text style={styles.Deliprice}>$1.5</Text>
      </View>
      <Image source={Linebreak} style={styles.Linebreak} color="gray" />

      <View style={styles.totalRow}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPrice}>$18.19</Text>
      </View>
      <View style={styles.delRow}>
        <Text style={styles.delText}>Estimated delivery time</Text>
        <Text style={styles.delTime}>15 - 30mins</Text>
      </View>
      <Text style={styles.PaymentText}>Payment methods</Text>

      <TouchableOpacity
        style={styles.Mastercontainer}
        onPress={() => handlePress("mastercard")}
      >
        <Image source={Mastercard} style={styles.Masterlogo} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardType}>Credit card</Text>
          <Text style={styles.cardNumber}>5105 **** **** 0505</Text>
        </View>
        {selectedButton === "mastercard" && (
          <Ionicons
            name="checkmark-circle-outline"
            size={30}
            style={styles.checkLogo}
          />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Visacontainer}
        onPress={() => handlePress("visa")}
      >
        <Image source={Visacard} style={styles.visaLogo} />
        <View style={styles.visaInfo}>
          <Text style={styles.visaText}>Debit card</Text>
          <Text style={styles.visaNumber}>3566 ******** 0505</Text>
        </View>
        {selectedButton === "visa" && (
          <Ionicons
            name="checkmark-circle-outline"
            size={30}
            style={styles.checkLogo}
          />
        )}
      </TouchableOpacity>
      <View style={styles.saveContainer}>
        <TouchableOpacity
          style={styles.saveLogoButton}
          onPress={() => alert("Card details saved for  future payments!")}
        >
          <Ionicons name="checkbox-outline" size={20} style={styles.saveLogo} />
        </TouchableOpacity>
        <Text style={styles.saveCardText}>
          Save card details for future payments
        </Text>
      </View>

      {transactionDetails && (
        <TouchableOpacity style={styles.overlay} onPress={handleClose}>
          <View style={styles.transactionContainer}>
            <Text style={styles.transactionText}>Transaction ID:001</Text>
            <Text style={styles.transactionText}>
              Status: {transactionDetails.status}
            </Text>
            <Text style={styles.transactionText}>
              Amount: {transactionDetails.amount}
            </Text>
            <Text style={styles.transactionText}>
              Date: {transactionDetails.date}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      <View style={styles.footercontainer}>
        <View style={styles.priceInfo}>
          <Text style={styles.footerText}>Total price</Text>
          <Text style={styles.footerPrice}>$18.19</Text>
        </View>
        <TouchableOpacity style={styles.payNowButton} onPress={goToSuccess}>
          <Text style={styles.payNowText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  iconButtonLeft: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  Orderheader: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    marginLeft: 5,
  },
  OrderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 5,
    paddingBottom: 10,
  },
  Ordertext: {
    fontSize: 18,
    color: "gray",
  },
  Orderprice: {
    fontSize: 18,
    color: "gray",
  },
  TaxesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 5,
    paddingBottom: 10,
  },
  Taxestext: {
    fontSize: 18,
    color: "gray",
  },
  Taxesprice: {
    fontSize: 18,
    color: "gray",
  },
  DeliveryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 5,
    paddingBottom: 10,
  },
  Delitext: {
    fontSize: 18,
    color: "gray",
  },
  Deliprice: {
    fontSize: 18,
    color: "gray",
  },
  Linebreak: {
    width: "95%",
    height: 1,
    backgroundColor: "#E7E8D8",
    marginVertical: 10,
    marginLeft: 10,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 5,
    paddingBottom: 20,
    paddingTop: 20,
  },
  totalText: {
    fontSize: 18,
    color: "gray",
  },
  totalPrice: {
    fontSize: 18,
    color: "gray",
  },
  delRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 5,
    paddingBottom: 60,
  },
  delText: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
  delTime: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
  PaymentText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 15,
  },
  Mastercontainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3C2F2F",
    padding: 16,
    borderRadius: 12,
    margin: 10,
    shadowColor: "#808080",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  Masterlogo: {
    width: 70,
    height: 40,
    marginRight: 22,
  },
  cardType: {
    fontSize: 14,
    color: "#EAE6E5",
  },
  cardNumber: {
    color: "#F3F4F6",
    fontSize: 14,
  },
  checkLogo: {
    marginLeft: "auto",
    color: "#2C5530",
  },
  Visacontainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 12,
    margin: 10,
  },
  visaLogo: {
    width: 80,
    height: 40,
    marginRight: 16,
  },
  visaText: {
    fontSize: 14,
    color: "#3C2F2F",
  },
  visaNumber: {
    color: "#808080",
    fontSize: 14,
  },
  saveContainer: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 50,
  },
  saveLogo: {
    marginLeft: 5,
    marginRight: 5,
  },
  saveCardText: {
    color: "#808080",
    fontSize: 16,
  },
  footercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 90,
  },
  footerText: {
    fontSize: 16,
    color: "#808080",
  },
  footerPrice: {
    fontSize: 32,
  },
  payNowButton: {
    backgroundColor: "#3C2F2F",
    borderRadius: 20,
    width: "50%",
  },
  payNowText: {
    alignItems: "center",
    color: "white",
    paddingTop: 20,
    paddingLeft: 60,
    fontSize: 18,
  },
  saveLogoButton: {
    marginRight: 10, // Adjust spacing if needed
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
    justifyContent: "center",
    alignItems: "center",
  },
  transactionContainer: {
    width: "80%", // Adjust the width as needed
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  transactionText: {
    fontSize: 16,
    color: "#000", // Black text color for visibility
    marginBottom: 10,
  },
});
