import React from "react";
import { View, Text, TextInput } from "react-native";
import { FONTS, SIZES, COLORS } from "../constants";
const FormInput = ({
  containerStyle,
  inputContainerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitalize = "none",
  errorMsg = "",
  maxLength,
}) => {
  return (
    <View style={{ ...containerStyle }}>
      {/* label & Error msj */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{label}</Text>
        <Text style={{ color: COLORS.red, ...FONTS.body4 }}> {errorMsg}</Text>
      </View>

      {/* Text Input */}
      <View
        style={{
          flexDirection: "row",
          height: 55,
          paddingHorizontal: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
          ...inputContainerStyle,
        }}
      >
        {prependComponent}
        <TextInput
          style={{ flex: 1, ...inputStyle }}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          // onChange={(text) => onChange(text)}
          autoCompleteType={autoCompleteType}
          maxLength={maxLength}
          onChangeText={(text) => onChange(text)}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;

// Bug fix
//Onchange for text input not working
