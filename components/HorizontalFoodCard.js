import React from "react";

import { TouchableOpacity, View, Text, Image } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../constants";

function HorizontalFoodCard({ containerStyle, imageStyle, item, onPress }) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* Image */}
      <Image source={item.image} style={imageStyle} />

      {/* Info */}
      <View style={{ flex: 1 }}>
        <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>

        <Text
          numberOfLines={1}
          style={{ color: COLORS.darkGray2, ...FONTS.body4 }}
        >
          {item.description}
        </Text>

        <Text style={{ marginTop: SIZES.base, ...FONTS.h2 }}>
          ${item.price}
        </Text>
      </View>

      {/* Calories */}

      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 5,
          right: SIZES.radius,
        }}
      >
        <Image source={icons.calories} style={{ width: 30, height: 30 }} />
        <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>
          {item.calories} Calories
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default HorizontalFoodCard;
