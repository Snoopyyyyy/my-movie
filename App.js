import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from "./screen/loginScreen.js";
import RegisterScreen from "./screen/registerScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name={"Login"} component={LoginScreen}/>
                <Stack.Screen name={"Register"} component={RegisterScreen}/>
                <Stack.Screen name={"Home"} component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
