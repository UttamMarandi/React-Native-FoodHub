import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import {
  FoodDetail,
  Checkout,
  MyCart,
  Success,
  AddCard,
  MyCard,
  DeliveryStatus,
  Map,
} from "./screens";
import CustomDrawer from "./navigation/CustomDrawer";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={CustomDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// Bug Fixes ,
// Problem: Drawer animation not working
//Solution: Instead of applying drawer animation in CustomDrawer component , we have to implement the animation logic in MainLayout.js. Here we have access to the progress value  using useDrawerProgress.
//Also this one is bit easier
