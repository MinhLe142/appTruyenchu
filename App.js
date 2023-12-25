
import { StatusBar } from 'expo-status-bar';
import {Component, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootComponent from "./src/screen/index"

import 'react-native-gesture-handler';




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
