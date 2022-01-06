import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  FormInput,
  FormInputCheck,
  Header,
  IconButton,
  RadioButton,
  TextButton,
} from "../../components";
import { FONTS, SIZES, COLORS, icons, images } from "../../constants";
import utils from "../../utils/Utils";

const AddCard = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNameError, setCardNameError] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [expiryDateError, setExpiryDateError] = useState("");
  const [cvv, setCvv] = useState("");
  const [cvvError, setCvvError] = useState("");
  const [isRemember, setIsRemember] = useState(false);

  useEffect(() => {
    let { selectedCard } = route.params;

    setSelectedCard(selectedCard);
  }, []);

  function isEnableCard() {
    return (
      cardName != "" &&
      cardNumber != "" &&
      expiryDate != "" &&
      cvv != "" &&
      cardNameError == "" &&
      cardNumberError == "" &&
      cvvError == ""
    );
  }

  function renderCard() {
    return (
      <ImageBackground
        source={images.card}
        style={{
          height: 200,
          width: "100%",
          marginTop: SIZES.radius,
          borderRadius: SIZES.radius,
          overflow: "hidden",
        }}
      >
        {/* Logo */}
        <Image
          source={selectedCard?.icon}
          resizeMode="contain"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            height: 40,
            width: 80,
          }}
        />

        {/* Details */}
        <View
          style={{
            position: "absolute",
            bottom: 10,
            left: 0,
            right: 0,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h3,
            }}
          >
            {cardName}
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ flex: 1, color: COLORS.white, ...FONTS.body3 }}>
              {cardNumber}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
              {expiryDate}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
  function renderHeader() {
    return (
      <Header
        title="ADD NEW CARD"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<View style={{ width: 40 }} />}
        // to make the title to center
      />
    );
  }

  function renderForm() {
    return (
      <View style={{ marginTop: SIZES.padding * 2 }}>
        {/* Card Number */}
        <FormInput
          label="Card Number"
          keyboardType="number-pad"
          value={cardNumber}
          maxLength={16}
          onChange={(value) => {
            setCardNumber(
              value
                .replace(/\s/g, "")
                .replace(/(\d{4})/g, "$1 ")
                .trim()
            );
            utils.validateInput(value, 16, setCardNumberError);
            // this replace and trim along with regular expression gives says that find any spaces in value , then divide the into 4 digits , followed by a space , "$1 ", and then trim the value
          }}
          errorMsg={cardNumberError}
          appendComponent={
            <FormInputCheck value={cardNumber} error={cardNumberError} />
          }
        />

        {/* Card Holder Name */}
        <FormInput
          label="Cardholder Name"
          value={cardName}
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={(value) => {
            setCardName(value);
            utils.validateInput(value, 1, setCardNameError);
          }}
          errorMsg={cardNameError}
          appendComponent={
            <FormInputCheck value={cardNumber} error={cardNumberError} />
          }
        />

        {/*Expiry Date, CVV  */}
        <View style={{ flexDirection: "row", marginTop: SIZES.radius }}>
          <FormInput
            label="Expiry Date"
            value={expiryDate}
            placeholder="MM/YY"
            maxLength={5}
            containerStyle={{
              flex: 1,
            }}
            onChange={(value) => {
              setExpiryDate(value);
              utils.validateInput(value, 5, setExpiryDateError);
            }}
            errorMsg={setExpiryDateError}
            appendComponent={
              <FormInputCheck value={expiryDate} error={expiryDateError} />
            }
          />

          <FormInput
            label="Cvv"
            value={cvv}
            // placeholder="MM/YY"
            maxLength={5}
            containerStyle={{
              flex: 1,
              marginLeft: SIZES.radius,
            }}
            onChange={(value) => {
              setCvv(value);
              utils.validateInput(value, 3, setCvvError);
            }}
            errorMsg={cvvError}
            appendComponent={<FormInputCheck value={cvv} error={cvvError} />}
          />
        </View>
        {/* Remember */}
        <View
          style={{
            alignItems: "flex-start",
            marginTop: SIZES.padding,
          }}
        >
          <RadioButton
            label="Remember the card details"
            isSelected={isRemember}
            onPress={() => setIsRemember(!isRemember)}
          />
        </View>
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <TextButton
          label="Add Card"
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableCard() ? COLORS.primary : COLORS.gray,
          }}
          onPress={() => navigation.goBack()}
          disabled={!isEnableCard()}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}

      {/* Body */}
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Card */}
        {renderCard()}

        {/* FOrms */}
        {renderForm()}
      </KeyboardAwareScrollView>

      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default AddCard;

// Bug
//Regex expression not provinding spaces in input field. Although it is working propery when displayed using variable.
// The cardNumber value gets updated with regex expression and has spaces after every 4 number but there is no space after 4 numbers in input field
