import React, { Component } from "react";
import {
    SafeAreaView,
    View,
    Text,

} from "react-native";
import Login from "./login";
import register from "./register";
import Register from "./register";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import 'react-native-gesture-handler';



export default RootComponent = function () {
    return(
        <NavigationContainer>
        <Login />
        {/* <Register /> */}
        </NavigationContainer>
    );
}