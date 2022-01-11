import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS, images, SIZES } from "../../constants";

const Notification = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
        marginBottom: 250,
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
          source={images.notification_image}
          resizeMode="contain"
          style={{
            width: 450,
            height: 500,
            position: "relative",
            top: 0,
            right: 15,
          }}
        />

        <Text
          style={{
            textAlign: "center",
            marginTop: SIZES.base,
            color: COLORS.darkGray,
            ...FONTS.body3,
          }}
        >
          You have not received any notification yet.
        </Text>
      </View>
    </View>
  );
};

export default Notification;
