import React from "react";
import { View, Text } from "react-native";

const Section = ({ title, onPress, children }) => {
  return (
    <View>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h3 }}>{title}</Text>

        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
            Show all
          </Text>
        </TouchableOpacity>
      </View>

      {/* COntent */}
      {children}
    </View>
  );
};

const Favourite = () => {
  return (
    <View>
      <Text>Favourite</Text>
    </View>
  );
};

export default Favourite;
