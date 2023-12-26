import React, { Component } from "react";
import {
    SafeAreaView,
    View,
    Text,

} from "react-native";
import Login from "./login";
import Register from "./register";
import Details from "./details";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import 'react-native-gesture-handler';



export default RootComponent = function () {
    return(
        <SafeAreaView>
        {/* <Login /> */}
        {/* <Register /> */}
        <Details />
        </SafeAreaView>
    );
}