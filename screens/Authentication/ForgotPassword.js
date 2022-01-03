import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AuthLayout } from ".";
import { COLORS, FONTS, SIZES, icons } from "../../constants";
import { FormInput, TextButton } from "../../components";
import utils from "../../utils/Utils";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function isEnableSignIn() {
    return email != "" && emailError == "";
    //   this means email and password both are filled and Email Error is also empty
  }

  return (
    <AuthLayout
      title="Password Recovery"
      subtitle="Please enter your email address to recover your password"
      titleContainerStyle={{ marginTop: SIZES.padding * 2 }}
    >
      {/* Form Input */}
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        <FormInput
          label="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={(value) => {
            //validate email
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                source={
                  email == "" || (email != "" && emailError == "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email == ""
                      ? COLORS.gray
                      : email !== "" && emailError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        {/* Send buttons */}
        <TextButton
          label="Send mail"
          disabled={isEnableSignIn() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignIn()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => navigation.goback()}
        />
      </View>
    </AuthLayout>
  );
};

export default ForgotPassword;
