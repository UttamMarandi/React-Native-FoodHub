import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AuthLayout } from ".";
import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButton,
  SocialSignComponent,
} from "../../components";
import { FONTS, COLORS, SIZES, icons } from "../../constants";
import utils from "../../utils/Utils";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);

  function isEnableSignIn() {
    return email != "" && password != "" && emailError == "";
    //   this means email and password both are filled and Email Error is also empty
  }

  return (
    <AuthLayout
      title="Let's Sign You in"
      subtitle="Welcome back , you've been missed"
    >
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        {/* Form Input */}
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

        <FormInput
          label="Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          containerStyle={{ marginTop: SIZES.radius }}
          onChange={(value) => setPassword(value)}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              onPress={() => setShowPass(!showPass)}
            >
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{ height: 20, width: 20, tintColor: COLORS.gray }}
              />
            </TouchableOpacity>
          }
        />

        {/* Save me & Forgot */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "space-between",
          }}
        >
          <CustomSwitch value={saveMe} onChange={(value) => setSaveMe(value)} />

          <TextButton
            label="Forgot Password"
            buttonContainerStyle={{ backgroundColor: null }}
            labelStyle={{ color: COLORS.gray, ...FONTS.body4 }}
            onPress={() => navigation.navigate("ForgotPassword")}
          />
        </View>
        {/* Sign In */}
        <TextButton
          label="Sign In"
          // disabled={isEnableSignIn() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignIn()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => navigation.push("OnBoard")}
        />

        {/* Sign Up */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Don't have an account?
          </Text>
          <TextButton
            label=" Sign Up"
            buttonContainerStyle={{ backgroundColor: null }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </View>
      {/* Footer */}
      <View>
        {/* Facebook */}
        <SocialSignComponent
          containerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue,
          }}
          icon={icons.fb}
          iconPosition="LEFT"
          iconStyle={{ tintColor: COLORS.white }}
          label="Continue with Facebook"
          labelStyle={{ marginLeft: SIZES.radius, color: COLORS.white }}
          onPress={() => console.log("FB")}
        />

        {/* GOogle */}
        <SocialSignComponent
          containerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
          icon={icons.google}
          iconPosition="LEFT"
          iconStyle={{ tintColor: null }}
          label="Continue with Google"
          labelStyle={{ marginLeft: SIZES.radius }}
          onPress={() => console.log("Google")}
        />
      </View>
    </AuthLayout>
  );
};

export default SignIn;

// Bug Fix : Warning: Cannot update a component (`ForwardRef(BaseNavigationContainer)`) while rendering a different component (`SignIn`).

//Typing error
//Inside <TextButton
//onPress={navigation.push("OnBoard")}
//it should be
//onPress={()=>navigation.push("OnBoard")}
