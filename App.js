import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import {Component, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootComponent from "./src/screen/index"
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RootComponent />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
