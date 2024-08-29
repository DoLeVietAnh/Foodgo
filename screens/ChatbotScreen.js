import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import axios from "axios";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Replace these with your actual images
const ChatbotIcon = require("../assets/icons/ChatbotIcon.png");
const AvatarIcon = require("../assets/icons/AvatarIcon.png");
const SendIcon = require("../assets/icons/SendIcon.png");

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hello! How can I help you with your food order?",
      sender: "friend",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [typing, setTyping] = useState(false);

  const sendMessage = async () => {
    if (inputText.trim().length > 0) {
      const userMessage = {
        id: Date.now().toString(),
        text: inputText,
        sender: "user",
      };
      setMessages([...messages, userMessage]);
      setInputText("");
      setTyping(true); // Set typing indicator

      try {
        const response = await axios.post("http://172.17.152.117:5000/chat", {
          message: inputText,
        });

        setTyping(false); // Remove typing indicator
        const botResponse = {
          id: Date.now().toString(),
          text: response.data,
          sender: "friend",
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      } catch (error) {
        setTyping(false); // Remove typing indicator if there is an error
        console.error("Error:", error);
      }
    }
  };

  const renderMessageItem = ({ item }) => (
    <View
      style={[
        styles.messageRow,
        item.sender === "user"
          ? styles.userMessageRow
          : styles.friendMessageRow,
      ]}
    >
      {item.sender === "friend" && (
        <Image source={ChatbotIcon} style={styles.avatar} />
      )}
      <View
        style={[
          styles.messageContainer,
          item.sender === "user" ? styles.userMessage : styles.friendMessage,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            item.sender === "friend" ? { color: "#000" } : {},
          ]}
        >
          {item.text}
        </Text>
      </View>
      {item.sender === "user" && (
        <Image
          source={AvatarIcon}
          style={[styles.avatar, { marginLeft: 8, marginRight: 0 }]}
        />
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
      </View>
      <FlatList
        data={
          typing
            ? [
                ...messages,
                { id: "typing", text: "Typing...", sender: "friend" },
              ]
            : messages
        }
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatContainer}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Image source={SendIcon} style={styles.sendButtonIcon} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 16,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  chatContainer: {
    padding: 16,
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 8,
  },
  userMessageRow: {
    justifyContent: "flex-end",
  },
  friendMessageRow: {
    justifyContent: "flex-start",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  messageContainer: {
    padding: 12,
    borderRadius: 10,
    maxWidth: "70%",
  },
  userMessage: {
    backgroundColor: "#EF2A39",
    alignSelf: "flex-end",
  },
  friendMessage: {
    backgroundColor: "#F3F4F6",
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 16,
    color: "#fff", // Adjust the text color as needed
  },
  inputContainer: {
    flexDirection: "row",
    padding: 8,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    borderRadius: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    opacity: 0.5,
  },
  sendButton: {
    backgroundColor: "#EF2A39",
    borderRadius: 15,
    padding: 8,
    justifyContent: "center",
  },
  sendButtonIcon: {
    width: 24,
    height: 24,
    tintColor: "#fff", // Optional: change the color of the icon
  },
});

export default ChatScreen;
