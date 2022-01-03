import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FONTS, COLORS, SIZES } from "../constants";

const IconLabel = ({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconStyle,
  onPress,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: SIZES.base,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          ...iconStyle,
        }}
      />
      <Text style={{ ...FONTS.body3, marginLeft: 5, ...labelStyle }}>
        {label}
      </Text>
    </View>
  );
};

export default IconLabel;
