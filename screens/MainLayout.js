import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import LinearGradient from "react-native-linear-gradient";
import { useDrawerProgress } from "@react-navigation/drawer";
import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabAction";
import { Home } from "../screens";
import { Header } from "../components";
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  constants,
  dummyData,
} from "../constants";

const TabButton = ({ label, icon, isFocused, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Animated.View
          style={{
            flexDirection: "row",
            width: "80%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
          }}
        >
          <Image
            source={icon}
            style={{ width: 20, height: 20, tintColor: COLORS.gray }}
          />
          {isFocused && (
            <Text
              numberOfLines={1}
              style={{
                marginLeft: SIZES.base,
                color: COLORS.gray,
                ...FONTS.h3,
              }}
            >
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const MainLayout = ({ navigation, selectedTab, setSelectedTab }) => {
  useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);
  //Tab Animation

  //====>Reanimated shared value
  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(COLORS.white);
  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue(COLORS.white);
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(COLORS.white);

  //===> Reanimated animated style
  const homeFlexStyle = useAnimatedStyle(() => {
    return {
      flex: homeTabFlex.value,
    };
  });

  const homeColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: homeTabColor.value,
    };
  });

  const searchFlexStyle = useAnimatedStyle(() => {
    return {
      flex: searchTabFlex.value,
    };
  });

  const searchColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: searchTabColor.value,
    };
  });

  const cartFlexStyle = useAnimatedStyle(() => {
    return {
      flex: cartTabFlex.value,
    };
  });

  const cartColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: cartTabColor.value,
    };
  });

  const favouriteFlexStyle = useAnimatedStyle(() => {
    return {
      flex: favouriteTabFlex.value,
    };
  });
  const favouriteColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: favouriteTabColor.value,
    };
  });

  const notificationFlexStyle = useAnimatedStyle(() => {
    return {
      flex: notificationTabFlex.value,
    };
  });
  const notificationColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: notificationTabColor.value,
    };
  });

  // Drawer Animation
  const progress = useDrawerProgress();

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const animatedStyle = {
    borderRadius,
    transform: [{ scale }],
  };
  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        ...animatedStyle,
      }}
    >
      {/* Header */}
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: "center",
        }}
        title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.openDrawer()}
          >
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
            }}
          >
            <Image
              source={dummyData?.myProfile?.profile_image}
              style={{ width: 40, height: 40, borderRadius: SIZES.radius }}
            />
          </TouchableOpacity>
        }
      />

      {/* Content */}
      <View style={{ flex: 1 }}>
        <Text>MainLayout</Text>
      </View>

      {/* Footer */}
      <View style={{ height: 100, justifytontent: "flex-end" }}>
        {/* Shadow */}
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[COLORS.transparent, COLORS.lightGray1]}
          style={{
            position: "absolute",
            top: -20,
            left: 0,
            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
        {/* Tabs */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: SIZES.radius,
            paddingBottom: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.white,
          }}
        >
          <TabButton
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constants.screens.home}
            onPress={() => setSelectedTab(constants.screens.home)}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
          />

          <TabButton
            label={constants.screens.search}
            icon={icons.search}
            isFocused={selectedTab == constants.screens.search}
            onPress={() => setSelectedTab(constants.screens.search)}
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
          />

          <TabButton
            label={constants.screens.cart}
            icon={icons.cart}
            isFocused={selectedTab == constants.screens.cart}
            onPress={() => setSelectedTab(constants.screens.cart)}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
          />

          <TabButton
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab == constants.screens.favourite}
            onPress={() => setSelectedTab(constants.screens.favourite)}
            outerContainerStyle={favouriteFlexStyle}
            innerContainerStyle={favouriteColorStyle}
          />

          <TabButton
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab == constants.screens.notification}
            onPress={() => setSelectedTab(constants.screens.notification)}
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
          />
        </View>
      </View>
    </Animated.View>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);

// Bug fix

//In order to render the shadow effect using <LinearGradient/> we have to remove alignItems and justifyContent from parent container

//Bug Fix

//Problem
//Reanimated 2 failed to create a worklet, maybe you forgot to add Reanimated's babel plugin?

//Solution
//Installation and configuaration failure of Reanimated 2
//Install latest / any version of reanimated 2 above 2.0
//babel.config.js
//add ==> "react-native-reanimated/plugin" // this should be the last plugin registerd

//Turn on Hermes engine by editing android/app/build.gradle
//project.ext.react = [
//   enableHermes: true  // <- here | clean and rebuild if changing
// ]

//Plug Reanimated in MainApplication.java
//add==>
//  import com.facebook.react.bridge.JSIModulePackage; // <- add
// import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add

//Inside ReactNativeHost(this)  method
//@Override
// protected JSIModulePackage getJSIModulePackage() {
//   return new ReanimatedJSIModulePackage(); // <- add
// }
