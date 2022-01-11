import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useDrawerProgress,
} from "@react-navigation/drawer";
import Animated from "react-native-reanimated";
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from "../constants";
import MainLayout from "../screens/MainLayout";

import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabAction";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingleft: SIZES.radius,
        borderRadius: SIZES.base, //backgroundColor
        backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{ width: 20, height: 20, tintColor: COLORS.white }}
      />
      <Text style={{ marginLeft: 15, color: COLORS.white, ...FONTS.h3 }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1, paddingHorizontal: SIZES.radius }}>
        {/* CLose */}
        <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              style={{
                height: 35,
                width: 35,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Profile */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            alignItems: "center",
          }}
          onPress={() => console.log("Profile")}
        >
          <Image
            source={dummyData.myProfile?.profile_image}
            style={{ width: 50, height: 50, borderRadius: SIZES.radius }}
          />

          <View style={{ marginLeft: SIZES.radius }}>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {dummyData.myProfile?.name}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* Drawer Items */}
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
          <CustomDrawerItem
            label={constants.screens.home}
            icon={icons.home}
            onPress={() => {
              setSelectedTab(constants.screens.home);
              navigation.navigate("MainLayout");
            }}
            isFocused={selectedTab == constants.screens.home}
          />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.hotel}
            onPress={() => {
              setSelectedTab(constants.screens.search);
              navigation.navigate("MainLayout");
            }}
            isFocused={selectedTab == constants.screens.search}
          />
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
            onPress={() => {
              setSelectedTab(constants.screens.favourite);
              navigation.navigate("MainLayout");
            }}
            isFocused={selectedTab == constants.screens.favourite}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
            onPress={() => {
              setSelectedTab(constants.screens.notification);
              navigation.navigate("MainLayout");
            }}
            isFocused={selectedTab == constants.screens.notification}
          />

          {/* Line Divider */}
          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />

          <CustomDrawerItem
            label="Track your order items"
            icon={icons.location}
          />
          <CustomDrawerItem label="Coupens" icon={icons.coupon} />
          <CustomDrawerItem label="Settings" icon={icons.setting} />
          <CustomDrawerItem label="Invite a friend" icon={icons.profile} />
          <CustomDrawerItem label="Help Center" icon={icons.help} />
        </View>

        {/* logout */}
        <View style={{ marginBottom: SIZES.padding }}>
          <CustomDrawerItem label="Logout" icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = ({ selectedTab, setSelectedTab }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Drawer.Navigator
        drawerContent={({ navigation, progress }) => {
          // progress is undefined , so this code is not working
          // setTimeout(() => {
          //   setProgress(progress);
          // }, 0);
          return (
            <CustomDrawerContent
              navigation={navigation}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
        }}
        screenOptions={{
          drawerType: "slide",
          overlayColor: "transparent",
          drawerStyle: {
            flex: 1,
            width: "65%",
            paddingRight: 20,
            backgroundColor: "transparent",
          },
          sceneContainerStyle: { backgroundColor: "transparent" },
          headerShown: false, // ut // to hide the home header
          //need to wrap all props inside screenOptions
          //   initialRouteName = "MainLayout"
        }}
      >
        <Drawer.Screen name="MainLayout">
          {(props) => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

function mapStateToProps(state) {
  return { selectedTab: state.tabReducer.selectedTab };
}
function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
