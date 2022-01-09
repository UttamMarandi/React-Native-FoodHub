import React, { useEffect } from "react";
import { View, Text, BackHandler, Image } from "react-native";

import { TextButton } from "../../components";
import { FONTS, SIZES, icons, COLORS, images } from "../../constants";

const Success = ({ navigation, route }) => {
  console.log("route", route.params);
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        return true;
      }
      //   this prevents any hardware handler to go back to previous screen
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.success}
          resizeMode="contain"
          style={{
            width: 150,
            height: 150,
          }}
        />
        <Text
          style={{
            marginTop: SIZES.padding,
            ...FONTS.h1,
          }}
        >
          Conratulations
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: SIZES.base,
            color: COLORS.darkGray,
            ...FONTS.body3,
          }}
        >
          Payment was successfully made
        </Text>
      </View>
      <TextButton
        label="Done"
        buttonContainerStyle={{
          height: 55,
          marginBottom: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
        onPress={() => navigation.navigate("DeliveryStatus")}
      />
    </View>
  );
};

export default Success;
