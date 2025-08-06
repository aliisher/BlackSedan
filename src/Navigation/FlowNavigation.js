import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LimoBooking from '../LimoBooking';

const FlowNavigation = () => {
  const MAIN_STACK = createNativeStackNavigator();
  return (
    <MAIN_STACK.Navigator
      screenOptions={{ headerShown: false }}
    //   initialRouteName="LimoBooking"
    >
      <MAIN_STACK.Screen name="LimoBooking" component={LimoBooking} />
    </MAIN_STACK.Navigator>
  );
};

export default FlowNavigation;

const styles = StyleSheet.create({});