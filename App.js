import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import SplashScreen from "react-native-splash-screen";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";

import OnBoarding from "./screens/Authentication/OnBoarding/OnBoarding";
import SignIn from "./screens/Authentication/SignIn";

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
import SignUp from "./screens/Authentication/SignUp";

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={"SignUp"}
        >
          <Stack.Screen name="SignUp" component={SignUp} />

          <Stack.Screen name="SignIn" component={SignIn} />

          <Stack.Screen name="OnBoard" component={OnBoarding} />
          <Stack.Screen name="Home" component={CustomDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

// Bug Fixes ,
// Problem: Drawer animation not working
//Solution: Instead of applying drawer animation in CustomDrawer component , we have to implement the animation logic in MainLayout.js. Here we have access to the progress value  using useDrawerProgress.
//Also this one is bit easier
