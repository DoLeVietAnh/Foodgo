import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [address, setAddress] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    if (name && email && password && reenterPassword && address) {
      if (password === reenterPassword) {
        // Add your signup logic here
        Alert.alert('Sign Up', 'Your account has been created successfully!');
      } else {
        Alert.alert('Error', 'Passwords do not match.');
      }
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
       <TextInput
        style={styles.input}
        placeholder="Delivery Address"
        value={address}
        onChangeText={setAddress}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Re-enter Password"
        value={reenterPassword}
        onChangeText={setReenterPassword}
        secureTextEntry={true}
      />
     
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#28a745',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
