import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/auth/loginScreen.js";
import RegisterScreen from "./screen/auth/registerScreen";

import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name={"Home"} component={HomeScreen}/>
                <Stack.Screen name={"Login"} component={LoginScreen}/>
                <Stack.Screen name={"Register"} component={RegisterScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
